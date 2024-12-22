'use server'
import React from 'react'
import { cookies } from 'next/headers'

export async function SaveLocale(data: string) {
  (await cookies()).set('NEXT_LOCALE', data)
}