export const addNote = (notes, noteToAdd) => {
	const newNotes = [...notes, noteToAdd];
	return newNotes.sort((a, b) => a.videoTime - b.videoTime);
};

export const deleteNote = (notes, noteToDelete) => {
	return notes.filter((note) => note._id !== noteToDelete);
};
