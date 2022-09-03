import { useFetch } from '../../hooks/barrel.file'

export const Task =  () => {

  const { data,loading } = useFetch();
  
  return (
    <h1>Tasks</h1>
  )
}