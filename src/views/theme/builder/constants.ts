import { createTheme } from "@/theme/create-theme";
import type { Theme } from "@/theme/types";

// sorted by alphabet
export const FONTS = [
            { label: "Helvetica Neue", key: "Helvetica Neue" },
            { label: "IBM Plex Mono", key: "IBM Plex Mono" },
            { label: "Inter", key: "Inter" },
            { label: "Lilita One", key: "Lilita One" },
            { label: "Poppins", key: "Poppins" },
            { label: "Space Mono", key: "Space Mono" },
          ]

export const GEMINI : Theme = {
    radius: 'full',
    title: {
        fontFamily: 'Google Sans Flex,Google Sans,Helvetica Neue,sans-serif'
    },
    text: {
        fontFamily: 'Google Sans Flex,Google Sans,Helvetica Neue,sans-serif'
    },
    palette: {
    default: {
        main: '#131314',  // Le fond principal (Background)
        dark: '#0e0e0f',  // Fond plus sombre pour les barres latérales
        light: '#1e1f20'  // Gris légèrement plus clair pour le survol ou les cartes
    },
    primary: {
        main: '#1a73e8',  // Le bleu Google caractéristique
        dark: '#174ea6',  // Bleu plus profond pour les états actifs
        light: '#8ab4f8'  // Bleu pastel utilisé pour le texte sur fond sombre
    },
    secondary: {
        main: '#c4c7c5',  // Gris clair pour le texte secondaire
        dark: '#8e918f',  // Gris plus sombre pour les icônes désactivées
        light: '#e3e3e3'  // Texte blanc cassé (High emphasis text)
    },
    error: {
        main: '#f28b82',  // Rouge corail (douceur du mode sombre)
        dark: '#d93025',  // Rouge alerte
        light: '#f6aea9'  // Rouge très clair pour les fonds d'erreur
    }
}
}

export const KEYPOP : Theme = createTheme({
    radius: 'none',
    titleFontFamily: 'Inter Variable',
    textFontFamily: 'Space Mono',
    primary: '#6090fa'
})

export const SPOTIFY : Theme = {
    radius: 'full', // Spotify utilise beaucoup de boutons totalement arrondis
    title: {
        fontFamily: 'Circular, Helvetica Neue, Helvetica, Arial, sans-serif'
    },
    text: {
        fontFamily: 'Circular, Helvetica Neue, Helvetica, Arial, sans-serif'
    },
    palette: {
        default: {
            main: '#121212',  // Fond principal très sombre
            dark: '#000000',  // Noir pur pour les contrastes
            light: '#282828'  // Gris "survol" typique des cartes Spotify
        },
        primary: {
            main: '#1DB954',  // Vert Spotify
            dark: '#169c46',
            light: '#1ed760'
        },
        secondary: {
            main: '#b3b3b3',  // Texte secondaire gris
            dark: '#535353',
            light: '#ffffff'  // Texte blanc pur pour le focus
        },
        error: {
            main: '#e91429',
            dark: '#a10e1c',
            light: '#f06370'
        }
    }
}

export const DEEZER : Theme = {
    radius: 'lg', 
    title: {
        fontFamily: 'Deezer, Inter, Arial, sans-serif'
    },
    text: {
        fontFamily: 'Inter, Arial, sans-serif'
    },
    palette: {
        default: {
            main: '#121216',  // Fond anthracite Deezer
            dark: '#0a0a0c',
            light: '#191922'
        },
        primary: {
            main: '#a238ff',  // Le nouveau violet signature
            dark: '#7e1fff',
            light: '#c082ff'
        },
        secondary: {
            main: '#ef5466',  // Le rose historique utilisé en accent
            dark: '#d1394a',
            light: '#ff8a98'
        },
        error: {
            main: '#ff3d00',
            dark: '#c32e00',
            light: '#ff754d'
        }
    }
}

export const APPLE : Theme = {
    radius: 'lg', // Apple utilise des arrondis très prononcés (Squircles)
    title: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    },
    text: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
    },
    palette: {
        default: {
            main: '#1c1c1e',  // iOS Dark Mode background
            dark: '#000000',
            light: '#2c2c2e'  // Grouped table cells color
        },
        primary: {
            main: '#0a84ff',  // Bleu système iOS
            dark: '#0056b3',
            light: '#409cff'
        },
        secondary: {
            main: '#8e8e93',  // Gris système standard
            dark: '#48484a',
            light: '#ebebf5'  // Texte vibrant sur fond sombre
        },
        error: {
            main: '#ff453a',  // Rouge système Apple
            dark: '#d7261b',
            light: '#ff6961'
        }
    }
}

export const MICROSOFT : Theme = {
    radius: 'sm', // Microsoft garde des angles plus stricts, même si Windows 11 les a adoucis
    title: {
        fontFamily: '"Segoe UI Variable Display", "Segoe UI", system-ui, sans-serif'
    },
    text: {
        fontFamily: '"Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif'
    },
    palette: {
        default: {
            main: '#201f1e',  // Gris neutre sombre Microsoft 365
            dark: '#11100f',
            light: '#292827'
        },
        primary: {
            main: '#0078d4',  // Bleu Windows / Azure
            dark: '#005a9e',
            light: '#2b88d8'
        },
        secondary: {
            main: '#a19f9d',
            dark: '#605e5c',
            light: '#f3f2f1'
        },
        error: {
            main: '#d13438',  // Rouge Fluent UI
            dark: '#a4262c',
            light: '#e81123'
        }
    }
}

export const NETFLIX : Theme = {
    radius: 'sm', // Netflix utilise des angles assez droits pour ses vignettes
    title: {
        fontFamily: 'Netflix Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
    },
    text: {
        fontFamily: 'Netflix Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
    },
    palette: {
        default: {
            main: '#000000',  // Noir pur
            dark: '#000000',
            light: '#141414'  // Le fameux gris de fond Netflix
        },
        primary: {
            main: '#E50914',  // Rouge Netflix
            dark: '#B20710',
            light: '#ff1a24'
        },
        secondary: {
            main: '#808080',  // Gris neutre pour les métadonnées
            dark: '#404040',
            light: '#e5e5e5'  // Texte blanc cassé
        },
        error: {
            main: '#e87c03',  // Netflix utilise souvent de l'orange pour les alertes info
            dark: '#b35f00',
            light: '#ffa33d'
        }
    }
}

export const AIRBNB : Theme = {
    radius: 'lg', // Très arrondi pour un aspect accueillant
    title: {
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, sans-serif'
    },
    text: {
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, sans-serif'
    },
    palette: {
        default: {
            main: '#222222',  // Fond sombre doux (pas de noir pur)
            dark: '#121212',
            light: '#333333'
        },
        primary: {
            main: '#FF385C',  // Couleur "Rausch" emblématique
            dark: '#E31C5F',
            light: '#FF5A5F'
        },
        secondary: {
            main: '#717171',
            dark: '#484848',
            light: '#ffffff'
        },
        error: {
            main: '#c13515',
            dark: '#8a240d',
            light: '#e05638'
        }
    }
}

export const INSTAGRAM : Theme = {
    radius: 'md',
    title: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    text: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    palette: {
        default: {
            main: '#000000',  // Noir OLED
            dark: '#000000',
            light: '#121212'  // Séparateurs et champs
        },
        primary: {
            main: '#0095f6',  // Bleu des boutons d'action
            dark: '#0074cc',
            light: '#5851db'  // Note de violet (rappel du logo)
        },
        secondary: {
            main: '#8e8e8e',
            dark: '#262626',
            light: '#fafafa'
        },
        error: {
            main: '#ed4956',
            dark: '#c32d39',
            light: '#ff6b7a'
        }
    }
}

export const X : Theme = {
    radius: 'full', // X conserve les boutons "capsules" hérités de Twitter
    title: {
        fontFamily: 'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    text: {
        fontFamily: 'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    palette: {
        default: {
            main: '#000000',  // Mode "Noir" (Lights out)
            dark: '#000000',
            light: '#16181c'  // Gris des cartes et de la barre de recherche
        },
        primary: {
            main: '#eff3f4',  // Le nouveau X privilégie le blanc/noir contrasté
            dark: '#d7dbdc',
            light: '#1d9bf0'  // L'ancien bleu Twitter reste utilisé pour les liens
        },
        secondary: {
            main: '#71767b',  // Texte secondaire
            dark: '#333639',
            light: '#e7e9ea'  // Texte principal
        },
        error: {
            main: '#f4212e',
            dark: '#bc1a26',
            light: '#ff5a64'
        }
    }
}