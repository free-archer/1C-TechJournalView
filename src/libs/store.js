import { writable } from 'svelte/store';

export const mParamsStore = writable([])
export const mColumsStore = writable([])
export const time_readStore = writable(0)
export const time_parseStore = writable(0)
export const time_storeStore = writable(0)
export const count_colums = writable(0)
export const count_row = writable(0)