
export const increment = (state) => {
    state.count++
    state.xmen = 'increment'
}

export const incrementBy = (state, val) => {
    state.count += val
    state.xmen = 'incrementBy' + val
    state.lastRandomInt = val
}

export const  setLoading = (state, val) => {
    state.isLoading = val
    state.xmen = 'setLoading' + val
}