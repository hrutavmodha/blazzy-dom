declare module 'blazzy-dom' {
    export * from 'blazzy-dom/jsx/jsx-runtime';
    export * from 'blazzy-dom/jsx/jsx-dev-runtime';
    export function Alert({
        children
    }: {
        children: string
    }): HTMLDivElement;
    export function Button({
        children,
        ...props
    }: {
        children: string | number
        [key: string]: any
    }): HTMLButtonElement;
    export function Code({
        children,
        ...props
    }: {
        children: Array<string>
        [key: string]: any
    }): HTMLDivElement;
    export function Confirm({
        children
    }: {
        children: string
    }): Promise<boolean>;
    export function Division({
        children,
        ...props
    }: {
        children: Array<HTMLElement>
        [key: string]: any
    }): HTMLDivElement;
    export function Footer({
        children,
        ...props
    }: {
        children: Array<HTMLElement>
        [key: string]: any
    }): HTMLElement
    export function Form({
        children,
        ...props
    }: {
        [key: string]: any;
        children: HTMLElement[];
    }): HTMLFormElement;
    export function Header({
        children,
        ...props
    }: {
        [key: string]: any;
        children: HTMLElement[];
    }): HTMLElement;
    export function Heading({
        level,
        children,
        ...props
    }: {
        [key: string]: any;
        level: number;
        children: string | number;
    }): HTMLHeadingElement;
    export function Input({
        type,
        ...props
    }: {
        [key: string]: any;
        type: "number" | "button" | "text" | "file" | "date" | "email" | "password";
    }): HTMLInputElement;
    export function Item({
        children,
        ...props
    }: {
        [key: string]: any;
        children: string;
    }): HTMLLIElement;
    export function Link({
        href,
        children,
        ...props
    }: {
        [key: string]: any;
        href: string;
        children: string | number;
    }): HTMLAnchorElement;
    export function List({
        ordered,
        children,
        ...props
    }: {
        [key: string]: any;
        ordered: boolean;
        children: HTMLLIElement[];
    }): HTMLOListElement | HTMLUListElement;
    export function Paragraph({
        children,
        ...props
    }: {
        [key: string]: any;
        children: string | number | boolean;
    }): HTMLParagraphElement;
    export function Prompt({
        children
    }: {
        children: string;
    }): Promise<string>;
    export function Script({
        children
    }: {
        children: () => any;
    }): HTMLScriptElement;
    export function useEffect(
        callBack: () => void | (() => void),
        dependencies: any[]
    ): void
    export function useScript({
        path,
        ...props
    }: {
        [key: string]: any;
        path: string;
    }): void
    export function useSocket(options: {
        url: string;
        autoConnect?: boolean | undefined;
        reconnection?: boolean | undefined;
        reconnectionAttempts?: number | undefined;
        reconnectionDelay?: number | undefined;
    }): {
        connect: () => void;
        disconnect: () => void;
        on: (event: string, handler: (...args: any[]) => void) => void;
        off: (event: string) => void;
        emit: (event: string, ...args: any[]) => void;
        isConnected: () => boolean | undefined;
    }
    export function useState<T>(
        initialState: T
    ): [
            T,
            (val: T) => void
        ];
    export function setContext(
        componentId: string
    ): void;
    export function dynamicRender(
        routes: {
            [key: string]: () => HTMLElement;
        }
    ): void;
    export function render(
        element: HTMLElement,
        parent?: HTMLElement | undefined
    ): void;
    export function setRender(
        render: () => void
    ): void;
    export function setRoutes(
        newRoutes: {
            [key: string]: () => HTMLElement;
        }
    ): void;
    export function navigate(
        path: string
    ): void;
}