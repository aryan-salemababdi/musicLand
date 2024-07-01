import { Song } from "../../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"

//* Fetch song data 
export const getSongsByUserId = async (): Promise<Song[]> => {
    //* Create a Supabase client for server-side usage, passing cookies for session handling
    const supabase = createServerComponentClient({
        cookies: cookies,
    }, {
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        supabaseUrl: process.env.NEXT_PUBLIC_SUPERBASE_URL
    });

    const {
        data: sessionData,
        error: sessionError
    } = await supabase.auth.getSession();

    if (sessionError) {
        console.log(sessionError.message);
        return [];
    }

    const { data, error } = await supabase
        .from("songs")
        .select("*")
        .eq("user_id", sessionData.session?.user.id)
        .order("created_at", { ascending: false });
    if (error) console.log(error.message);

    return (data as any) || [];
}