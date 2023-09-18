import React from 'react'
import * as C from './styles'

const SearcItem = () => {
    return (
        <C.SearchItem>
            <C.SearchImg src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt='' />

            <C.siDesc>
                <C.siTitle>Tower Street Apartments</C.siTitle>
                <C.siDistance>500m from center</C.siDistance>
                <C.siTaxiOp>Free airport taxi</C.siTaxiOp>
                <C.siSubtitle>Studio Apartment with Air conditioning</C.siSubtitle>
                <C.siFeatures>Entire studio • 1 bathroom • 21m² 1 full bed</C.siFeatures>
                <C.siCancelOp>Free cancellation</C.siCancelOp>
                <C.siCancelOpSubtitle>You can cancel later, so lock in this great price today!</C.siCancelOpSubtitle>
            </C.siDesc>
            <C.siDetails>
                <C.siRating>
                    <C.isRatingNote>Excellent</C.isRatingNote>
                    <C.isRatingButton>8.9</C.isRatingButton>
                </C.siRating>
                <C.siDetailTexts>
                    <C.siPrice>$112</C.siPrice>
                    <C.siTaxOp>Includes taxes and fees</C.siTaxOp>
                    <C.siCheckButton>See availability</C.siCheckButton>
                </C.siDetailTexts>
            </C.siDetails>
        </C.SearchItem>
    )
}

export default SearcItem