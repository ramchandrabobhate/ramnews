import React from 'react'
import { Container } from '@mui/material'
import Newscard from '../Components/Newscard'
function Newscontent({ newsArr, newsResult }) {
    return (
        <Container maxWidth='md'>
            <div>
                {newsArr.map((newsitem) => (

                    <Newscard newsitem={newsitem} key={newsitem.title}/>
                ))
}
            </div>
        </Container>
    )
}

export default Newscontent