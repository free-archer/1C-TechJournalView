import { writable } from 'svelte/store';

export const mParamsStore = writable([])
export const mColumsStore = writable([])
export const count_row = writable(0)

export const step_paginations = writable(20)
export const current_page = writable(20)
export const Pages = writable([1])
export const miss_start = writable(20)


