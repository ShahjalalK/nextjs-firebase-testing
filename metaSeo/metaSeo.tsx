import Head from 'next/head'
import React from 'react'

type Props = {
    title: string;

}

const MetaSeo = ({title}: Props) => {
  return <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
</Head>
}

export default MetaSeo



