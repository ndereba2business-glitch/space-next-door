// components/sections/Gallery.tsx
'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SectionHead from '@/components/ui/SectionHead'
import { GALLERY } from '@/data/venue'
import { SITE } from '@/data/site'
import { getLenis } from '@/lib/motion'
import { IconArrowUpRight, IconChevron, IconClose, IconInstagram } from '@/components/ui/icons'
import styles from './Gallery.module.css'

export default function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
    getLenis()?.stop()
  }
  const close = useCallback(() => dialogRef.current?.close(), [])
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i == null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    [],
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => {
      setIndex(null)
      getLenis()?.start()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    dialog.addEventListener('close', onClose)
    dialog.addEventListener('keydown', onKey)
    return () => {
      dialog.removeEventListener('close', onClose)
      dialog.removeEventListener('keydown', onKey)
    }
  }, [step])

  const current = index == null ? null : GALLERY[index]

  return (
    <section id="gallery" className="section theme-light" aria-labelledby="gallery-title" tabIndex={-1}>
      <div className="container">
        <SectionHead
          num="06"
          label="Gallery"
          id="gallery-title"
          className={styles.head}
          lines={[
            <>
              Inside <em>the space.</em>
            </>,
          ]}
        />

        <ul className={styles.grid}>
          {GALLERY.map((photo, i) => (
            <li key={photo.caption} className={styles.tile}>
              <button
                type="button"
                className={`frame ${styles.button}`}
                onClick={() => open(i)}
                data-reveal="image"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? '(min-width: 900px) 42vw, 100vw' : '(min-width: 900px) 34vw, 50vw'}
                  placeholder="blur"
                  style={{ objectPosition: photo.focus }}
                />
                <span className={styles.caption}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {photo.caption}
                </span>
                <span className="sr-only">, open larger view</span>
              </button>
            </li>
          ))}
        </ul>

        <a
          href={SITE.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.insta}
          data-reveal="up"
        >
          <IconInstagram width={24} height={24} />
          <span className={styles.instaText}>
            <span className={styles.instaLabel}>Every night, posted</span>
            <span className={styles.instaHandle}>{SITE.social.instagram.handle}</span>
          </span>
          <IconArrowUpRight width={24} height={24} className={styles.instaArrow} />
        </a>
      </div>

      <dialog
        ref={dialogRef}
        className={`theme-dark ${styles.dialog}`}
        aria-label="Photo viewer"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        {current && (
          <figure className={styles.viewer}>
            <div className={styles.viewerImg}>
              <Image
                key={current.caption}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                placeholder="blur"
              />
            </div>
            <figcaption className={styles.viewerCaption}>
              <span>
                {String((index ?? 0) + 1).padStart(2, '0')} / {String(GALLERY.length).padStart(2, '0')}
              </span>
              {current.caption}
            </figcaption>
          </figure>
        )}
        <div className={styles.controls}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
            <IconChevron dir="left" width={22} height={22} />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next photo">
            <IconChevron width={22} height={22} />
          </button>
          <button type="button" onClick={close} aria-label="Close photo viewer" autoFocus>
            <IconClose width={22} height={22} />
          </button>
        </div>
      </dialog>
    </section>
  )
}
