import EventEmitter, { ConstructorOptions, event, eventNS } from 'eventemitter2';
import debounce from 'lodash.debounce';

interface RepositoryConstructor<T> extends ConstructorOptions {
    onRegister?: (arg: T, name: string) => T;
    name?: string;
}

export class Repository<T> extends EventEmitter {
    private registry: Record<string, T> = {};
    readonly #name!: string;

    readonly #onRegister!: (arg: T, name: string) => T;

    get name() {
        return this.#name;
    }

    static generateUniqueId = () =>
        Buffer.from(Math.random().toString()).toString('base64').substring(10, 15);

    constructor({
        onRegister = arg => arg,
        name = Repository.generateUniqueId(),
        ...options
    }: RepositoryConstructor<T> = {}) {
        super(options);
        this.#onRegister = onRegister;
        this.#name = name;
    }

    has = (itemName: string): boolean => {
        return !!this.registry[itemName];
    };

    emit(event: eventNS | event, ...values: any[]) {
        event = typeof event === 'string' ? `${this.#name}::event` : event;
        return super.emit(event, ...values);
    }

    /**
     * Register a item with the src.
     */
    register = <X extends T = T, ItemName extends string = ''>(itemName: ItemName, item: X) => {
        this.registry = {
            ...this.registry,
            [itemName]: this.#onRegister?.(item, itemName) ?? item,
        };

        this.emit('item_registered', itemName);
    };

    /**
     * Get all registered module from the registry.
     */
    getAll = () => {
        return this.registry;
    };


    /**
     * Register a listener to the module registry.
     * Return value returns a function that removes the listener.
     */
    listen = (callback: (events: string[]) => void, { throttle = 100 }: { throttle?: number } = {}) => {
        let cached: string[] = [];
        

        const wrappedCallback = () => {
            callback(cached);
            cached = [];
        }

        const debouncedCallback = !throttle ? wrappedCallback: debounce(wrappedCallback, Math.abs(throttle), {
            trailing: true,
            leading: false,
        }) ;

        const handledCallback = (itemName: string) => {
            cached.push(itemName);
            debouncedCallback();
        }

        this.on('item_registered', handledCallback);
        return () => {
            this.off('item_registered', handledCallback);
        };
    };
}
