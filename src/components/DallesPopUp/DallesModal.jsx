import React from 'react'
import dalles1 from '../../dalles/dalles1.jpeg'
import './dallesModal.css'

function DallesModal() {
    return (
        <div className="DallesModal">
            
            <div className='container-dalles1'>
            <button className="close" onClick={() => console.log("ça a cliqué")}>Close</button>
                <img src={dalles1} alt='' />
                <div className='title-dalles1'>EXTÉRIEUR MÉMORIAL COLLEVILLE SUR MER</div>
                <div className='text-dalles1'>Type granit : Cachemir White flammé</div>
            </div>
        </div>
    )
}

export default DallesModal
