import { writable } from "svelte/store";
import { useParams } from "svelte-navigator"

const params = useParams()
console.log(params)
const lessonStore = writable(params)

export default lessonStore