// export const myAction = async ( state ) => {


// }

export const setEntries = async ( state, entries ) => {

  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const UpdateEntry = async (state, entry ) => {
  const idx = state.entries.map( e => e.id).indexOf(entry.id)
  state.entries[idx] = entry

}

export const addEntry = async (state, entry) => {

  state.entries = [entry, ...state.entries] 

}


export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter(entry => entry.id !== id)

}