import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App'
import { useGetAllPostsQuery } from '../services/api'
interface UserData {
	id: number
	title: string
	body: string
}

const Main: FC = () => {
	const [currentPostStart, setCurrentPostStart] = useState(0)
	const { data, isLoading, error } = useGetAllPostsQuery({
		limit: 15,
		start: currentPostStart,
	})
	const [isMyFetching, setIsFetchingDown] = useState(false)
	const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
	useEffect(() => {
		if (isMyFetching) {
			setCurrentPostStart(prev => {
				return prev < 93 ? prev + 1 : prev
			})
			setIsFetchingDown(false)
		}
		if (isMyFetchingUp) {
			setCurrentPostStart(prev => {
				return prev > 0 ? prev - 1 : prev
			})
			setIsMyFetchingUp(false)
		}
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [isMyFetching, isMyFetchingUp])
	const scrollHandler = (e: any): void => {
		if (
			e.target.documentElement.scrollHeight -
				e.target.documentElement.scrollTop -
				window.innerHeight <
			50
		) {
			setIsFetchingDown(true)
			window.scrollTo(
				0,
				e.target.documentElement.scrollHeight +
					e.target.documentElement.scrollTop
			)
		}
	}
	return (
		<div className='App'>
			{error ? (
				<>Походу,произошла ошибка</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<div>
					{data.map((item: { id: number; title: string; body: string }) => (
						<ul key={item.id} className='list1a'>
							<li>Номер: {item.id}</li>
							<li>Заголовок: {item.title}</li>
							<li>Описание: {item.body}</li>
							<Link to={`/posts/${item.id}`}>
								<button>Просмотр</button>
							</Link>
						</ul>
					))}
				</div>
			) : null}
		</div>
	)
}

export default Main
