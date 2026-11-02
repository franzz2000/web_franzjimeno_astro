import Link from "@/solid/Link.tsx";
import { NAVIGATION } from '@/consts';
import { For, createSignal } from "solid-js";
import { useTranslations } from "@/i18n";

// Recibimos el idioma como prop
export default function MobileNav(props: { lang: 'en' | 'es' }) {
  const t = useTranslations(props.lang); // Se lo pasamos al traductor
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen());
    document.body.style.overflow = isOpen() ? 'hidden' : '';
  }

  return (
    <>
      <button aria-label={t('components.mobileNav.toggleMenu')} class="sm:hidden" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-8 w-8 text-white drop-shadow-md">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
      
      <div
        class={`fixed inset-0 transform bg-white dark:bg-gray-950 duration-300 ease-in-out z-[100] flex flex-col overflow-y-auto ${isOpen() ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div class="flex justify-end p-6">
          <button class="h-8 w-8 text-gray-900 dark:text-gray-100" aria-label={t('components.mobileNav.toggleMenu')} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        
        <nav class="mt-8 flex flex-col w-full">
          <For each={NAVIGATION}>
            {({ href, title }) => (
              <div class="px-12 py-4 w-full" onClick={toggleMenu}>
                <Link href={href} class="block text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
                  {t(title as any)}
                </Link>
              </div>
            )}
          </For>
        </nav>
      </div>
    </>
  )
}
