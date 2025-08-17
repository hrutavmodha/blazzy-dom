declare module 'blazzy-dom' {
    export interface JSXElement {
        type: string | Function;
        props: Record<string, any>;
        children?: JSXElement[];
    }
    export interface JSXProps {
        children?: any;
        [key: string]: any;
    }
    export function jsx(type: any, props: any): HTMLElement;
    export function jsxs(type: any, props: any): HTMLElement;
    export function jsxDEV(type: any, props: any): HTMLElement;
    export function Fragment(props: JSXProps): any;
    export function render(element: HTMLElement, parent?: HTMLElement): void;
    export function dynamicRender(element: HTMLElement, parent?: HTMLElement): void;
    export function setRender(renderFn: () => void): void;
    export function reRender(): void;
    export function setRoutes(routes: Record<string, () => HTMLElement>): void;
    export function navigate(path: string): void;
    export type StateSetter<T> = (value: T) => void;
    export type StateTuple<T> = [T, StateSetter<T>];
    export function useState<T>(initialState: T): StateTuple<T>;
    export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    export function useScript(src: string): void;
    export function useSocket(url: string): {
        socket: any;
        connected: boolean;
        send: (event: string, data?: any) => void;
        on: (event: string, callback: (data: any) => void) => void;
        off: (event: string, callback: (data: any) => void) => void;
    };
    export interface ComponentProps {
        children?: any;
        [key: string]: any;
    }
    export function Alert(props: ComponentProps & {
        children: string;
    }): HTMLElement;
    export function Button(props: ComponentProps & {
        children: string | number;
        onClick?: (event: Event) => void;
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
    }): HTMLButtonElement;
    export function Code(props: ComponentProps & {
        children: string;
        language?: string;
        theme?: 'light' | 'dark';
    }): HTMLElement;
    export function Confirm(props: ComponentProps & {
        message: string;
        onConfirm: () => void;
        onCancel?: () => void;
        confirmText?: string;
        cancelText?: string;
    }): HTMLElement;
    export function Division(props: ComponentProps & {
        className?: string;
        id?: string;
    }): HTMLDivElement;
    export function Footer(props: ComponentProps & {
        className?: string;
    }): HTMLElement;
    export function Form(props: ComponentProps & {
        onSubmit?: (event: Event) => void;
        method?: string;
        action?: string;
    }): HTMLFormElement;
    export function Header(props: ComponentProps & {
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        className?: string;
    }): HTMLElement;
    export function Heading(props: ComponentProps & {
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        children: string | number;
    }): HTMLHeadingElement;
    export function Input(props: ComponentProps & {
        type?: string;
        placeholder?: string;
        value?: string;
        onChange?: (event: Event) => void;
        required?: boolean;
    }): HTMLInputElement;
    export function Item(props: ComponentProps & {
        children: any;
    }): HTMLLIElement;
    export function Link(props: ComponentProps & {
        href: string;
        children: string | number;
        target?: string;
    }): HTMLAnchorElement;
    export function List(props: ComponentProps & {
        ordered?: boolean;
        children: any[];
    }): HTMLUListElement | HTMLOListElement;
    export function Paragraph(props: ComponentProps & {
        children: string | number;
        className?: string;
    }): HTMLParagraphElement;
    export function Prompt(props: ComponentProps & {
        message: string;
        onConfirm: (value: string) => void;
        onCancel?: () => void;
        placeholder?: string;
        defaultValue?: string;
    }): HTMLElement;
    export function Script(props: ComponentProps & {
        src?: string;
        content?: string;
    }): HTMLScriptElement;
}
declare module 'blazzy-dom/jsx/jsx-runtime' {
    export function jsx(type: any, props: any): HTMLElement;
    export function jsxs(type: any, props: any): HTMLElement;
    export function Fragment(props: any): any;
}
declare module 'blazzy-dom/jsx/jsx-dev-runtime' {
    export function jsxDEV(type: any, props: any): HTMLElement;
}