import React from 'react'

import { Link } from 'react-router-dom'
import { catalogTypeState, setCatalogType } from '../../redux/slices/catalogSlice';
import { useAppDispatch } from '../../redux/store';

interface catalogLinkProps {
    imgSrc: string;
    name: string;
    catalogState: catalogTypeState;
}

const CatalogLink: React.FC<catalogLinkProps> = ({imgSrc, name, catalogState}) => {

  const dispatch = useAppDispatch()

  return (
    <Link to={"/catalog"} onClick={() => dispatch(setCatalogType(catalogState))} className="category">
        <img src={imgSrc} alt="" className="category__img"/>
        <h3 className="category__title">{name}</h3>
    </Link>
  )
}

export default CatalogLink