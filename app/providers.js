// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init("phc_An1y3jbrNgWRUmsedVIkVhddPBp84FHWJFTsrsy4f1y", {
    api_host: "https://us.i.posthog.com",
    person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
  })
}
export function CSPostHogProvider({ children }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}