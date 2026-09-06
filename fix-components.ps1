# Fix all components that need 'use client'
$files = @(
    "app/page.tsx",
    "app/properties/page.tsx",
    "app/properties/[id]/page.tsx",
    "app/properties/villas/page.tsx",
    "app/properties/penthouses/page.tsx",
    "app/properties/estates/page.tsx",
    "app/properties/beachfront/page.tsx",
    "app/locations/page.tsx",
    "app/services/page.tsx",
    "app/blog/page.tsx",
    "app/about/page.tsx",
    "app/contact/page.tsx",
    "app/compare/page.tsx",
    "app/wishlist/page.tsx",
    "app/search/page.tsx",
    "app/dashboard/page.tsx",
    "components/sections/Testimonials.tsx",
    "components/sections/NeighborhoodGuide.tsx",
    "components/ui/ScrollReveal.tsx",
    "components/ui/AnimatedCounter.tsx",
    "components/ui/PropertyCard.tsx",
    "components/ui/WishlistButton.tsx",
    "components/navigation/Navigation.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        if ($content -notmatch "'use client'") {
            $content = "'use client'`n`n" + $content
            $content | Out-File -FilePath $file -Encoding utf8 -Force
            Write-Host "Added 'use client' to $file" -ForegroundColor Green
        } else {
            Write-Host "Already has 'use client': $file" -ForegroundColor Yellow
        }
    } else {
        Write-Host "File not found: $file" -ForegroundColor Red
    }
}
