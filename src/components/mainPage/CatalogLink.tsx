import React from 'react'

import { Link } from 'react-router-dom'
import { catalogTypeState, setCatalogType } from '../../redux/slices/catalogSlice';
import { useAppDispatch } from '../../redux/store';

interface catalogLinkProps {
    imgSrc: string;
    name: string;
    linkTo: catalogTypeState;
}

const CatalogLink: React.FC<catalogLinkProps> = ({imgSrc, name, linkTo}) => {

  const dispatch = useAppDispatch()
  return (
      <Link onClick={() => dispatch(setCatalogType(linkTo))} to={`./catalog/${linkTo}`}>
        <div className="catalog-links__element">
          <img className='catalog-links__element__img' src={imgSrc} alt="" />
          <div className="catalog-links__element__inner">{name}</div>
        </div>
      </Link>
  )
}

export default CatalogLink