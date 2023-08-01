import type { ComponentType } from "react"
import type { IStyleWithTheme } from "../theme/types"
import type { TextStyle, ViewStyle } from "react-native"

export type Component<P = {}> = ComponentType<P> | ComponentType<P> & Record<string, ComponentType>;

export type ComponentWithTheme<P = {}> = {
    Component: Component<P>,
    defaultStyles: Record<string, IStyleWithTheme<ViewStyle | TextStyle>>;
}

export type AllComponents = Record<string, Component>
