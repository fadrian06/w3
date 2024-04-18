type sel = HTMLElement | string
type c = string | false | null
type ondisplaychange = false | null | (() => any | void)
type readyfunc = false | null | ((e: Event) => any | void)
type xml = Parameters<XMLHttpRequest['send']>[0]
type target = Parameters<XMLHttpRequest['open']>[1]
type method = 'GET' | 'POST' | false | null
type func = (responseText: string) => any | void
type mixed = number | boolean | string
type x = false | null | {[index: string]: string}
type ss = {
	current: number
	timeout: number
	milliseconds: number
	x: ReturnType<w3['getElements']>
	ondisplaychange?: ondisplaychange
	start(): void
	display(n: number): void
	next(): void
	previous(): void
}

export type w3 = {
	dataObject: {[index: string]: HTMLElement}
	/** Hides HTML elements */
	hide(sel: sel): void
	getElements(id: sel): [HTMLElement] | ReturnType<Document['querySelectorAll']>
	hideElements(elements: HTMLElement[]): void
	hideElement(element: HTMLElement): void
	styleElement(element: HTMLElement, prop: string, val: string | null): void
	/** Shows HTML elements */
	show(sel: sel, a?: boolean): void
	showElements(elements: HTMLElement[]): void
	showElement(element: HTMLElement): void
	/** Adds style to HTML elements */
	addStyle(sel: sel, prop: string, val: string | null): void
	/** Toggles between hiding and showing HTML elements */
	toggleShow(sel: sel): void
	/** Adds one or multiple classes to HTML elements */
	addClass(sel: sel, name: string): void
	addClassElements(elements: HTMLElement[], name: string): void
	addClassElement(element: HTMLElement, name: string): void
	/** Removes one or multiple classes from HTML elements */
	removeClass(sel: sel, name: string): void
	removeClassElements(elements: HTMLElement[], name: string): void
	removeClassElement(element: HTMLElement, name: string): void
	/** Toggles the class of HTML elements */
	toggleClass(sel: sel, c1?: c, c2?: c): void
	toggleClassElements(elements: HTMLElement[], c1?: c, c2?: c): void
	toggleClassElement(element: HTMLElement, c1?: c, c2?: c): void
	/** Filters the display of HTML elements */
	filterHTML(id: sel, sel: string, filter: string): void
	/** Sorts the display of HTML elements */
	sortHTML(id: sel, sel: string, sortvalue?: c): void
	/** Make HTML elements display as a slideshow */
	slideshow(sel: string, ms: number, func?: ondisplaychange): ss
	/** Displays HTML in HTML */
	includeHTML(cb?: ondisplaychange): undefined | void
	/** Reads data from a server */
	getHttpData(file: target, func: func): void
	/** Reads JSON data from a server */
	getHttpObject(file: target, func: func): void
	displayHttp(id: string, file: target): void
	/** Displays JavaScript objects in HTML */
	displayObject(id: string, data: {[index: string]: any}): void
	http(target: target, readyfunc?: readyfunc, xml?: xml, method?: method): void
}

export function init_template(id: string, obj: HTMLElement): HTMLElement
export function w3_replace_curly(elmnt: HTMLElement, typ: mixed | 'attribute', repeatX: string, x?: x): HTMLElement
export function w3_replace_html(a: HTMLElement, r: string, result: string): void