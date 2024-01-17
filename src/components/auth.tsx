import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({ email });

        if (error) {
            toast(
                "发送失败", {
                description: error.message,
            })
        } else {
            toast("验证码已发送",
                {
                    description: "请查收邮件",
                })
        }
        setLoading(false);
    };

    return (
        <div className="py-10 flex justify-center">
            <Card className="flex flex-col gap-4 p-10">
                <p className="text-2xl">通过邮箱免密登录</p>
                <form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="请输入你的邮箱"
                        value={email}
                        required={true}
                        className='mb-4'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button disabled={loading} className='w-full'>
                        {loading ? <span>发送中</span> : <span>发送验证码</span>}
                    </Button>

                </form>
            </Card>
        </div>
    )
}