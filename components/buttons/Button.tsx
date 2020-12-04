import React from 'react'
import styles from './button.module.css'

export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean
	/**
	 * What background color to use
	 */
	backgroundColor?: string
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large'
	/**
	 * Button contents
	 */
	label: string
	/**
	 * Optional click handler
	 */
	onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
	const mode = primary ? styles.Primary : styles.Secondary
	const sizeType = () => {

		switch(size){
			case 'small':
				return styles.Small
			case 'medium':
				return styles.Medium
			case 'large':
				return styles.Large
			default:
				return styles.Medium
		}
	}
	return (
		<button
			type="button"
			className={[styles.button, mode, sizeType()].join(" ") || styles.button}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
