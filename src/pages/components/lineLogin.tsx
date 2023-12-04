// components/LineLoginButton.tsx
import { randomString } from '@/component/randomString'
import React from 'react'

const LineLoginButton: React.FC = () => {
  const handleLineLogin = () => {
    console.log('id is', process.env.NEXT_PUBLIC_LINE_CLIENT_ID)
    const clientId = 2002015826
    const redirectUri = encodeURIComponent('http://localhost:3000/login/') // Next.jsのサーバーURLとリダイレクトパス
    const state = randomString(10)
    const scope = 'profile%20openid'

    const lineAuthUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`

    window.location.href = lineAuthUrl
  }

  return <button onClick={handleLineLogin}>Lineでログイン</button>
}

export default LineLoginButton
