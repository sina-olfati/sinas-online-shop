'use server'

import React from 'react'
import { cookies } from 'next/headers'

// export const SaveLocale = async (lang: string) => {

//     // const currentLang = (await cookies()).get
//   const cookieStore = await cookies()
//   cookieStore.set("NEXT_LOCALE", lang)
//   // return (console.log(lang))
// }

export async function SaveLocale(data: string) {
  (await cookies()).set('NEXT_LOCALE', data)
}