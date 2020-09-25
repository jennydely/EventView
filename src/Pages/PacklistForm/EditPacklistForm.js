import React from 'react'
import Footer from '../components/Footer'
import PacklistForm from './PacklistForm'

export default function EditPacklistForm() {
  return (
    <>
      <header>
        <h1>Create PackList</h1>
      </header>
      <main>
        <PacklistForm />
      </main>
      <Footer />
    </>
  )
}
