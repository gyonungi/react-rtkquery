import { FC } from 'react'

const NotFound: FC = () => {
	return (
		<div className='content__error-info'>
			<h2>Произошла ошибка 😕</h2>
			<p>
				К сожалению, не удалось получить питсы. Попробуйте повторить попытку
				позже.
			</p>
		</div>
	)
}
export default NotFound
