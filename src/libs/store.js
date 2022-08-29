import { writable } from 'svelte/store';

export const mParamsStore = writable([])
export const mColumsStore = writable([])
export const count_row = writable(0)

export const step_paginations = writable(10)
export const current_page = writable(10)

