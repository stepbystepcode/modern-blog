import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Avatar({ url, size, onUpload }:{ url: string, size: number, onUpload: any }) {
    const [avatarUrl, setAvatarUrl] = useState<string>('')
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        if (url) downloadImage(url)
    }, [url])

    async function downloadImage(path: string) {
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path)
            if (error) {
                throw error
            }
            const url = URL.createObjectURL(data)
            setAvatarUrl(url)
        } catch (error: any) {
            console.log('Error downloading image: ', error.message)
        }
    }

    async function uploadAvatar(event: React.ChangeEvent<HTMLInputElement>) {
        try {
            setUploading(true)

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

            if (uploadError) {
                throw uploadError
            }

            onUpload(event, filePath)
        } catch (error: any) {
            alert(error.message)
        } finally {
            setUploading(false)
        }
    }

    return (
        <div>
            {avatarUrl ? (
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="rounded-full m-8 shadow-xl"
                   
                />
            ) : (
                <div style={{ height: size, width: size }} />
            )}
            <div>
                <label className="button primary block" htmlFor="single">
                    <div className=''>
                    {uploading ? '正在上传 ...' : '上传头像'}
                    </div></label>
                <input
                    style={{
                        visibility: 'hidden',
                        position: 'absolute',
                    }}
                    type="file"
                    id="single"
                    placeholder='上传头像'
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={uploading}
                />
            </div>
        </div>
    )
}