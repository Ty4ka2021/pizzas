import debounce from 'lodash.debounce'
import React, { useCallback, useRef, useState } from "react"
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/filterSlice'
import s from './Search.module.css'


const Search = () => {
	const [value, setValue] = useState('')

	const dispatch = useDispatch()
	const inputRef = useRef()

	const setSearchValueEvent = (value) => {
		dispatch(setSearchValue(value))
	}

	const removeInput = () => {
		dispatch(setSearchValue(''))
		setValue('')
		inputRef.current.focus()
	}

	const updateSearchValue = useCallback(
		debounce((str) => {
			setSearchValueEvent(str)
		}, 1000),
		[],
	)

	const onChangeInput = (e) => {
		setValue(e.target.value)
		updateSearchValue(e.target.value)
	}


	return (
		<div className={s.search}>

			<svg className={s.searchSvg} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="612.08px" height="612.08px" viewBox="0 0 612.08 612.08" ><path d="M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
		c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
		c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
		 M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
		S338.402,419.811,237.927,419.811z"/>


			</svg>

			<input ref={inputRef} className={s.input} value={value} onChange={onChangeInput} type="text" placeholder='search ...' />


			{value &&
				<svg onClick={removeInput} className={s.closeSvg} height="512px" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg" ><g class="st2" id="cross"><g class="st0"><line class="st1" x1="112.5" x2="401" y1="112.5" y2="401" /><line class="st1" x1="401" x2="112.5" y1="112.5" y2="401" /></g></g><g id="cross_copy"><path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" /></g></svg>
			}



		</div>
	)
}

export default Search