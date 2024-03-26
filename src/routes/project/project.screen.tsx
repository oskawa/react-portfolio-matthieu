import { useParams } from "react-router-dom"
import http from "../../api/http"
import { useEffect, useState } from "react"
import LayoutsFactory from "./components/layout.factory/layout.factory"

export function ProjectScreen() {
  const [project, setProject] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const { slug } = useParams()



  async function fetchData() {
    try {
      const response = await http.get('portfolio?slug=' + slug)
      setProject(response.data)
      setLoading(false)
      setError(false)
      console.log(response.data)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => { fetchData() }, [])
  if (project?.[0]) {
    return <div>
      {project[0]?.acf?.repeatable_content.map((layout) => <LayoutsFactory name={layout?.acf_fc_layout} {...layout} />)
      }
    </div>
  }
  return null
}