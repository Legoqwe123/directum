import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { loadAuthor } from "@actions"

import { useQuery } from "hooks/user.query"

import { AuthorView } from "./ui/author.view"
import { WithLoading } from "@components/ui/with.loading"

export const Author = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.author.loading)

  const query = useQuery()

  const albumId = query.get("albumId")

  useEffect(() => {
    dispatch(loadAuthor(albumId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <WithLoading
      component={() => <AuthorView />}
      loading={loading}
      boxProps={{
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  )
}
