/* eslint-disable no-console */
// first
const concat: (str1: string, str2: string) => string = (str1, str2) => str1 + str2

console.log(concat('Hello ', 'World'))

// second
interface MyHometask {
  howIDoIt: string
  simeArray: (string | number)[]
  withData?: MyHometask[]
}

const myHometask: MyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
}

console.log({ myHometask })

// third

interface MyArray<T> {
  [N: number]: T
  reduce<U>(fn: (acc: U, current: T, i: number, self: MyArray<T>) => U, initialValue: U): U
}

const tsArr: MyArray<number> = [1, 2, 3, 4]

tsArr.reduce((acc, current) => acc + current, 0)
