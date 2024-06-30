"use client";
import { useEffect } from "react";
import {
    useSessionContext,
    useSupabaseClient
} from "@supabase/auth-helpers-react";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
    const SupabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    const onChange = (open: boolean) => {
        if (!open) onClose()
    }

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    return (
        <Modal
            title="Welcome Back!"
            description="Please login to your account"
            isOpen={isOpen}
            onCheange={onChange}
        >
            <Auth
                theme="dark"
                providers={["google", "apple", "github"]}
                magicLink
                supabaseClient={SupabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#22c55e"
                            }
                        }
                    }
                }}
            />
        </Modal>
    )
}

export default AuthModal