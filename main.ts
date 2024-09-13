/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from liusen
load dependency
"Tinybit-ACE": "file:../pxt-Tinybit"
*/
//% color="#585CA9" weight=20 icon="\uf1b9"
namespace ACE_Math {

//% block="ones of $num"
//% num.shadow="math_number"
//% weight=104 color=#585CA9
export function getLastDigit(num: number): number {
    return num % 10;
}

//% block="tens of $num"
//% num.shadow="math_number"
export function getTensDigit(num: number): number {
    return Math.floor((num % 100) / 10);
}
//% block="hundreds of $num"
//% num.shadow="math_number"
export function getHundredsDigit(num: number): number {
    return Math.floor((num % 1000) / 100);
}
//% block="last two digits of $num"
//% num.shadow="math_number"
export function getLastTwoDigits(num: number): number {
    return num % 100;
}

}
