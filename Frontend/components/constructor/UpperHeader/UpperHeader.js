import React from 'react'
import Router from 'next/router';

import styles from './UpperHeader.module.scss'

import { ABOUT, CONTACTS, WARE_HOUSE } from './../../../utils/paths';
import { SVG } from '../../../utils/const';

import IconText from '../../containers/IconText/IconText';
import Flex from '../../containers/Flex/Flex';
import GeoIcon from './../../svg/GeoIcon';

function UpperHeader() {

  return (
    <div className={styles.upper_header_wrapper}>
      <IconText text='г. Оренбург' left>
        <GeoIcon/>
      </IconText>
      <Flex position='between'>
          <div className={styles.menu}>
            <div>
              <a onClick={() => Router.push('/')}>Главная</a>
              <a onClick={() => Router.push(ABOUT)}>О нас</a>
              <a onClick={() => Router.push(CONTACTS)}>Контакты</a>
              {/* <a onClick={() => Router.push(WARE_HOUSE)}>Склады</a> */}
            </div>
          </div>
          <div>
            +7 912 340 3720
          </div>
      </Flex>
    </div>
  )
}

export default UpperHeader