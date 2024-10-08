import React, { useState, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { device } from '../../helpers/style'

const Wrapper = styled.section`
	width: 10%;
	position: absolute;
	padding: 0em -3em;

	* {
		box-sizing: border-box;
	}

	::after {
		content: '';
		display: table;
		clear: both;
	}

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 10px;
		height: ${props => props.lineHeight}px;
		width: 2px;
		background: red;
	}

	@media screen and (${device.tablets}) {
		::before {
			left: 50%;
		}
	}
`

function VerticalLineWrapper({ className, children }) {
	const [lineHeight, setLineHeight] = useState(0)
	const wrapperHeight = useRef(null)

	useLayoutEffect(() => {
		const handleResize = () => {
			setLineHeight(
				wrapperHeight.current.clientHeight -
					wrapperHeight.current.lastChild.clientHeight
			)
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [children, lineHeight])

	return (
		<Wrapper
			ref={wrapperHeight}
			id="vertical--line--wrapper"
			className={className}
			lineHeight={lineHeight}
		>
			{children}
		</Wrapper>
	)
}

export default VerticalLineWrapper
