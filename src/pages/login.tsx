import React from 'react'
import { useState } from 'react'

const LoginForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで電話番号によるログイン処理を実装
  }

  const handleLineLogin = () => {
    // Lineでのログイン処理を実装
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phone">電話番号:</label>
      <input
        type="tel"
        id="phone"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button type="submit">ログイン</button>
      <button
        type="button"
        onClick={handleLineLogin}
      >
        Lineでログイン
      </button>
    </form>
  )
}

export default LoginForm
