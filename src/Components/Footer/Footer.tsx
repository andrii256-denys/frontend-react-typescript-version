import React from 'react';

import './Footer.scss';

export const Footer: React.FunctionComponent = () => (
	<footer className="Footer restrictor1200">
		<div className="Footer__left">
			<p className="Footer__source-code">
				source код
				&nbsp;
				<a
					href="https://github.com/andrii256-denysVarenik/grocceries-front"
					target="_blank"
					rel="noreferer noopener"
					className="Footer__source-code-link">
					frontend
				</a>
			</p>
			<p className="Footer__source-code">
				source код
				&nbsp;
				<a
					href="https://github.com/andrii256-denysVarenik/"
					target="_blank"
					rel="noreferer noopener"
					className="Footer__source-code-link">
					backend
				</a>
			</p>
		</div>

		<div className="Footer__center">
			<p className="Footer__main-text">
				made with ❤️ by
			</p>
			<p className="Footer__main-text">
				<a
					href="https://github.com/Andrii256"
					className="Footer__author"
					title="Андрій Грушецький (робив Frontend)"
					target="_blank"
					rel="noreferer noopener"
				>
					@andrii256
				</a>
				&nbsp;
				&
				&nbsp;
				<a
					href="https://github.com/Den-Varenik"
					className="Footer__author"
					title="Денис Вареник (робив Backend)"
					target="_blank"
					rel="noreferer noopener"
				>
					@den-varenik
				</a>
			</p>
			<p className="Footer__year-mark">
				{new Date(Number(process.env.REACT_APP_REALEASE_MOMENT)).getFullYear()}
			</p>
		</div>

		<div className="Footer__right">
		</div>
	</footer>
)