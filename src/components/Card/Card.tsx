import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetPostsIdQuery } from '../../services/api'

export const Card: React.FC = () => {
	const { id } = useParams()
	console.log(id)
	const { data = [], isLoading, error } = useGetPostsIdQuery(id)

	return (
		<div>
			{error ? (
				<>Походу,произошла ошибка</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<p>Номер: {data.id}</p>
					<p>Заголовок: {data.title}</p>
					<p>Описание: {data.body}</p>
					<Link to='/'>
						<button>Назад</button>
					</Link>
				</>
			) : null}
		</div>
	)
}

export default Card
