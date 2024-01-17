import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import Avatar from './avatar'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Account({ session }: { session: any }) {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState<string>('')
    const [avatar_url, setAvatarUrl] = useState<string>('')

    useEffect(() => {
        let ignore = false
        async function getProfile() {
            setLoading(true)
            const { user } = session

            const { data, error } = await supabase
                .from('profiles')
                .select(`username, avatar_url`)
                .eq('id', user.id)
                .single()

            if (!ignore) {
                if (error) {
                    console.warn(error)
                } else if (data) {
                    setUsername(data.username)
                    setAvatarUrl(data.avatar_url)
                }
            }

            setLoading(false)
        }

        getProfile()

        return () => {
            ignore = true
        }
    }, [session])

    async function updateProfile(event: React.FormEvent<HTMLFormElement>, avatarUrl: string) {
        event.preventDefault()

        setLoading(true)
        const { user } = session

        const updates = {
            id: user.id,
            username,
            avatar_url,
            updated_at: new Date(),
        }

        const { error } = await supabase.from('profiles').upsert(updates)

        if (error) {
            alert(error.message)
        } else {
            setAvatarUrl(avatarUrl)
        }
        setLoading(false)
    }

    return (
        <form className="px-64 flex gap-3 flex-col" onSubmit={(event) => updateProfile(event, avatar_url)}>
            <Avatar
                url={avatar_url}
                size={150}
                onUpload={(event: React.FormEvent<HTMLFormElement>, url: string) => {
                    updateProfile(event, url)
                }}
            />
            <div className='flex gap-3 items-center'>
                <label htmlFor="email" className='w-16'>邮箱</label>
                <Input id="email" type="text" value={session.user.email} disabled />
            </div>
            <div className='flex gap-3 items-center'>
                <label htmlFor="username" className='w-16'>用户名</label>
                <Input
                    id="username"
                    type="text"
                    required
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className='flex gap-3 ml-auto'>
                <Button className="button block primary" type="submit" disabled={loading}>
                    {loading ? '加载中 ...' : '更新信息'}
                </Button>
                <Button className="button block" type="button" onClick={() => supabase.auth.signOut()}>
                    退出登录
                </Button>
            </div>
        </form>
    )
}