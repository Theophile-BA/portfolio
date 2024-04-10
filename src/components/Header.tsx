import React from 'react'
import Link from 'next/link'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Navbar from '@/components/NavBar'

export default async function Header() {
    const client = createClient()
    const settings = await client.getSingle('settings')
    return (
        <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
            <Navbar settings={settings} />
        </header>
    )
}
