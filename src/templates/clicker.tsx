import React,{useState, useEffect,} from 'react';

export function Cliker(){
    const [data, setData ] = useState({
        money: 0,
        costClick:1,
        multiply:1,
        upgradeCost:50,
        autoMoney:1,
    })
    function addMoney(){
        setData(prev => ({...prev, money: prev.money + prev.costClick}))
    }
    function buy(){
        setData(prev => ({
            ...prev,
            money:data.money - data.upgradeCost,
            multiply: (data.multiply +data.multiply)/ 1.95,
            upgradeCost:Math.round(data.upgradeCost * data.multiply)* 1.5,
            costClick: Math.round(data.costClick + data.multiply),
            autoMoney: Math.round(prev.autoMoney + data.multiply) + 0.5
        }))
    }
    
    useEffect(()=>{
        const autoAdd = setInterval(()=> setData(prev=> ({...prev, money: prev.money + prev.autoMoney})),1000)
        return () => clearTimeout(autoAdd)
    },[])

    return(
        <div className='container'>
            <div className="clicker">
                <h1 className='text-center'>Привет, это кликер, нажимайте на зеленую кнопку что бы добывать монеты</h1>
                <button unselectable="on" onClick={addMoney} className={`click__button clicker__button m-0-auto outline-none bg-green-400 py-5 px-5`}>Прибавить монет</button>
                <p className='text-center'>Монеты: {data.money}</p>
                <p className='text-center'>Цена улучшения: {data.upgradeCost}</p>
                {data.money >= data.upgradeCost ? <button unselectable="on" onClick={buy} className={`buy__button clicker__button  m-0-auto outline-none bg-blue-300 py-5 px-5`}>Купить улучшение</button> :''}
                </div>
        </div>
    )
}