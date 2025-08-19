import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n-config';
import { CtaSection } from '@/components/sections/CtaSection';
import { Check, Sparkles, Heart, Leaf, Circle, Target, Star, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { ExpandableCardGrid } from '@/components/ui/expandable-card-grid';
import styles from '@/styles/garden-animations.module.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function ShiatsuPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.shiatsuPage;

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Sophisticated background elements using natural palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sage green tranquility */}
        <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-[rgb(var(--color-tertiary))]/8 rounded-full blur-3xl animate-pulse"></div>
        {/* Maracuja warmth */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse delay-700"></div>
        {/* Terracotta grounding */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgb(var(--color-secondary))]/4 to-[rgb(var(--color-tertiary))]/3 rounded-full blur-3xl"></div>
        
        {/* Living Garden Background Elements */}
        
        {/* Far Background Layer - Forest Silhouettes */}
        
        {/* Distant Forest Canopy - Ultra Background */}
        <div className={`absolute top-0 left-0 w-full h-screen ${styles.backgroundLayer} ${styles.canopySway} ${styles.delay10}`} style={{ opacity: 0.03 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Distant mountain-like tree line */}
            <path d="M0 400C150 350 300 380 450 360C600 340 750 370 900 350C1050 330 1150 360 1200 340L1200 800L0 800Z" 
                  fill="currentColor" opacity="0.8"/>
            {/* Layered forest depth */}
            <path d="M0 450C200 420 400 440 600 410C800 380 1000 420 1200 400L1200 800L0 800Z" 
                  fill="currentColor" opacity="0.6"/>
            <path d="M0 500C300 470 600 490 900 460C1050 450 1150 470 1200 450L1200 800L0 800Z" 
                  fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Atmospheric Lighting Effects */}
        <div className={`absolute top-0 left-0 w-full h-screen ${styles.sunbeamFilter} ${styles.delay5}`}>
          <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Dappled sunlight rays */}
            <path d="M200 0L180 200L220 200Z" fill="currentColor" opacity="0.05"/>
            <path d="M500 0L480 250L520 250Z" fill="currentColor" opacity="0.04"/>
            <path d="M800 0L775 300L825 300Z" fill="currentColor" opacity="0.06"/>
            <path d="M1000 0L980 180L1020 180Z" fill="currentColor" opacity="0.03"/>
            
            {/* Golden hour gradient overlay */}
            <defs>
              <radialGradient id="sunbeam" cx="50%" cy="20%" r="60%">
                <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.08 }} />
                <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#sunbeam)"/>
          </svg>
        </div>
        
        {/* Large Tree Silhouettes - Far Background */}
        <div className={`absolute top-0 right-0 w-40 h-screen ${styles.backgroundLayer} ${styles.treeRustle} ${styles.delay8}`}>
          <svg width="160" height="100%" viewBox="0 0 160 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Majestic oak tree */}
            <path d="M80 700L80 800" stroke="currentColor" strokeWidth="12" opacity="0.12"/>
            {/* Complex canopy with realistic shape */}
            <path d="M30 400C15 300 25 200 50 150C75 100 95 120 115 150C140 200 130 300 115 400C105 500 95 550 80 600C65 550 55 500 30 400Z" 
                  fill="currentColor" opacity="0.06"/>
            {/* Multiple foliage clusters */}
            <circle cx="55" cy="250" r="35" fill="currentColor" opacity="0.04"/>
            <circle cx="105" cy="230" r="40" fill="currentColor" opacity="0.05"/>
            <circle cx="80" cy="300" r="45" fill="currentColor" opacity="0.04"/>
            <circle cx="65" cy="380" r="30" fill="currentColor" opacity="0.03"/>
            <circle cx="95" cy="370" r="35" fill="currentColor" opacity="0.04"/>
            
            {/* Branch structure */}
            <path d="M80 600C70 550 60 500 55 450" stroke="currentColor" strokeWidth="3" opacity="0.08"/>
            <path d="M80 600C90 550 100 500 105 450" stroke="currentColor" strokeWidth="3" opacity="0.08"/>
            <path d="M80 500C65 480 50 460 45 440" stroke="currentColor" strokeWidth="2" opacity="0.06"/>
            <path d="M80 500C95 480 110 460 115 440" stroke="currentColor" strokeWidth="2" opacity="0.06"/>
          </svg>
        </div>
        
        <div className={`absolute top-20 left-0 w-32 h-screen ${styles.backgroundLayer} ${styles.treeRustle} ${styles.delay10}`}>
          <svg width="128" height="100%" viewBox="0 0 128 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Birch-like tree */}
            <path d="M64 650L64 800" stroke="currentColor" strokeWidth="8" opacity="0.10"/>
            {/* Lighter, more delicate canopy */}
            <path d="M25 400C12 320 22 240 40 200C58 160 70 170 85 200C103 240 95 320 85 400C80 480 75 520 64 580C53 520 48 480 25 400Z" 
                  fill="currentColor" opacity="0.05"/>
            <circle cx="45" cy="280" r="25" fill="currentColor" opacity="0.03"/>
            <circle cx="85" cy="270" r="30" fill="currentColor" opacity="0.04"/>
            <circle cx="64" cy="350" r="28" fill="currentColor" opacity="0.03"/>
            
            {/* Delicate branching */}
            <path d="M64 580C58 540 52 500 48 460" stroke="currentColor" strokeWidth="2" opacity="0.06"/>
            <path d="M64 580C70 540 76 500 80 460" stroke="currentColor" strokeWidth="2" opacity="0.06"/>
          </svg>
        </div>
        
        {/* Tree Shadows on Ground */}
        <div className={`absolute bottom-0 left-0 w-full h-32 ${styles.shadowShift} ${styles.delay7}`}>
          <svg width="100%" height="128" viewBox="0 0 1200 128" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Soft tree shadows */}
            <ellipse cx="200" cy="100" rx="60" ry="15" fill="currentColor" opacity="0.08"/>
            <ellipse cx="500" cy="110" rx="80" ry="20" fill="currentColor" opacity="0.06"/>
            <ellipse cx="800" cy="105" rx="70" ry="18" fill="currentColor" opacity="0.07"/>
            <ellipse cx="1000" cy="108" rx="50" ry="12" fill="currentColor" opacity="0.05"/>
          </svg>
        </div>
        
        {/* Garden Path Stones - Background */}
        <div className={`absolute bottom-0 left-1/4 w-96 h-20 ${styles.backgroundLayer} ${styles.pathShimmer}`}>
          <svg width="384" height="80" viewBox="0 0 384 80" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Scattered stone path */}
            <ellipse cx="50" cy="60" rx="12" ry="8" fill="currentColor" opacity="0.08"/>
            <ellipse cx="90" cy="55" rx="15" ry="10" fill="currentColor" opacity="0.06"/>
            <ellipse cx="140" cy="62" rx="10" ry="7" fill="currentColor" opacity="0.09"/>
            <ellipse cx="180" cy="58" rx="13" ry="9" fill="currentColor" opacity="0.07"/>
            <ellipse cx="230" cy="61" rx="11" ry="8" fill="currentColor" opacity="0.08"/>
            <ellipse cx="280" cy="56" rx="14" ry="9" fill="currentColor" opacity="0.06"/>
            <ellipse cx="330" cy="63" rx="9" ry="6" fill="currentColor" opacity="0.09"/>
            {/* Moss between stones */}
            <circle cx="70" cy="58" r="3" fill="currentColor" opacity="0.04"/>
            <circle cx="115" cy="61" r="2.5" fill="currentColor" opacity="0.05"/>
            <circle cx="200" cy="59" r="3.5" fill="currentColor" opacity="0.04"/>
          </svg>
        </div>
        
        {/* Flowing vine - background left */}
        <div className={`absolute top-0 left-0 h-full w-20 ${styles.backgroundLayer} ${styles.vineCurl} ${styles.delay1}`}>
          <svg width="80" height="100%" viewBox="0 0 80 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M10 0C15 50 25 100 35 150C45 200 35 250 25 300C15 350 25 400 35 450C45 500 35 550 25 600C15 650 25 700 35 750C40 775 42 800 42 800" 
                  stroke="currentColor" strokeWidth="2" opacity="0.3" fill="none"/>
            <path d="M20 80C25 85 30 90 35 95C30 100 25 105 20 110" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
            <path d="M30 200C35 205 40 210 45 215C40 220 35 225 30 230" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
            <path d="M15 350C20 355 25 360 30 365C25 370 20 375 15 380" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
          </svg>
        </div>
        
        {/* Root System Network - Deep Background */}
        <div className={`absolute bottom-0 left-0 w-full h-40 ${styles.backgroundLayer} ${styles.rootPulse} ${styles.delay9}`}>
          <svg width="100%" height="160" viewBox="0 0 1200 160" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Main root network */}
            <path d="M0 80C100 85 200 75 300 80C400 85 500 75 600 80C700 85 800 75 900 80C1000 85 1100 75 1200 80" 
                  stroke="currentColor" strokeWidth="2" opacity="0.15"/>
            {/* Secondary roots */}
            <path d="M150 80C160 100 170 120 180 140" stroke="currentColor" strokeWidth="1.5" opacity="0.1"/>
            <path d="M450 80C440 100 430 120 420 140" stroke="currentColor" strokeWidth="1.5" opacity="0.1"/>
            <path d="M750 80C760 100 770 120 780 140" stroke="currentColor" strokeWidth="1.5" opacity="0.1"/>
            {/* Tertiary root tendrils */}
            <path d="M100 90C110 100 105 110 115 120" stroke="currentColor" strokeWidth="1" opacity="0.08"/>
            <path d="M350 85C360 95 355 105 365 115" stroke="currentColor" strokeWidth="1" opacity="0.08"/>
            <path d="M650 90C660 100 655 110 665 120" stroke="currentColor" strokeWidth="1" opacity="0.08"/>
            <path d="M950 85C960 95 955 105 965 115" stroke="currentColor" strokeWidth="1" opacity="0.08"/>
          </svg>
        </div>
        
        {/* Grass elements - bottom border */}
        <div className={`absolute bottom-0 left-0 w-full h-16 ${styles.backgroundLayer}`}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`absolute bottom-0 ${styles.grassWave} ${i % 2 ? styles.delay2 : styles.delay4}`} 
                 style={{ left: (i * 8.33) + '%' }}>
              <svg width="20" height="30" viewBox="0 0 20 30" className="text-[rgb(var(--color-tertiary))]">
                <path d="M10 30C10 25 8 20 10 15C12 10 10 5 10 0" stroke="currentColor" strokeWidth="1.5" opacity="0.4" fill="none"/>
                <path d="M8 30C8 25 6 20 8 15C10 10 8 5 8 0" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none"/>
                <path d="M12 30C12 25 14 20 12 15C10 10 12 5 12 0" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none"/>
              </svg>
            </div>
          ))}
        </div>
        
        {/* Midground Layer - Forest Structure */}
        
        {/* Side Tree Trunks - Vertical Elements */}
        <div className={`absolute top-0 left-0 w-16 h-screen ${styles.midgroundLayer} ${styles.trunkSway} ${styles.delay3}`}>
          <svg width="64" height="100%" viewBox="0 0 64 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Left side trunk with bark texture */}
            <path d="M32 100L32 800" stroke="currentColor" strokeWidth="20" opacity="0.3"/>
            <path d="M28 100L28 800" stroke="currentColor" strokeWidth="2" opacity="0.15"/>
            <path d="M36 100L36 800" stroke="currentColor" strokeWidth="2" opacity="0.15"/>
            
            {/* Bark texture details */}
            <path d="M25 200C30 205 35 210 35 220C35 225 30 230 25 235" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
            <path d="M39 300C34 305 29 310 29 320C29 325 34 330 39 335" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
            <path d="M26 450C31 455 36 460 36 470C36 475 31 480 26 485" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
            <path d="M38 600C33 605 28 610 28 620C28 625 33 630 38 635" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
            
            {/* Moss growing on trunk */}
            <circle cx="30" cy="350" r="3" fill="currentColor" opacity="0.15" className={styles.mossGrow}/>
            <circle cx="35" cy="500" r="2.5" fill="currentColor" opacity="0.12" className={styles.mossGrow}/>
            <circle cx="29" cy="650" r="4" fill="currentColor" opacity="0.18" className={styles.mossGrow}/>
          </svg>
        </div>
        
        <div className={`absolute top-0 right-0 w-20 h-screen ${styles.midgroundLayer} ${styles.trunkSway} ${styles.delay7}`}>
          <svg width="80" height="100%" viewBox="0 0 80 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Right side trunk - larger */}
            <path d="M48 120L48 800" stroke="currentColor" strokeWidth="24" opacity="0.25"/>
            <path d="M43 120L43 800" stroke="currentColor" strokeWidth="2.5" opacity="0.12"/>
            <path d="M53 120L53 800" stroke="currentColor" strokeWidth="2.5" opacity="0.12"/>
            
            {/* More complex bark pattern */}
            <path d="M40 180C45 185 50 190 50 200C50 205 45 210 40 215" stroke="currentColor" strokeWidth="1.2" opacity="0.08"/>
            <path d="M56 280C51 285 46 290 46 300C46 305 51 310 56 315" stroke="currentColor" strokeWidth="1.2" opacity="0.08"/>
            <path d="M41 420C46 425 51 430 51 440C51 445 46 450 41 455" stroke="currentColor" strokeWidth="1.2" opacity="0.08"/>
            
            {/* Trunk moss clusters */}
            <circle cx="45" cy="300" r="4" fill="currentColor" opacity="0.16" className={styles.mossGrow}/>
            <circle cx="51" cy="480" r="3.5" fill="currentColor" opacity="0.14" className={styles.mossGrow}/>
            <circle cx="46" cy="620" r="5" fill="currentColor" opacity="0.2" className={styles.mossGrow}/>
            <circle cx="49" cy="750" r="2.8" fill="currentColor" opacity="0.13" className={styles.mossGrow}/>
          </svg>
        </div>
        
        {/* Overhead Canopy Branches */}
        <div className={`absolute top-0 left-20 w-full h-40 ${styles.midgroundLayer} ${styles.branchWave} ${styles.delay4}`}>
          <svg width="100%" height="160" viewBox="0 0 1200 160" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Major overhead branches */}
            <path d="M0 120C200 110 400 130 600 115C800 100 1000 120 1200 110" 
                  stroke="currentColor" strokeWidth="6" opacity="0.25"/>
            <path d="M100 80C300 75 500 90 700 78C900 66 1100 85 1200 75" 
                  stroke="currentColor" strokeWidth="4" opacity="0.20"/>
            
            {/* Secondary branch network */}
            <path d="M200 115C220 90 240 65 260 50" stroke="currentColor" strokeWidth="3" opacity="0.15"/>
            <path d="M500 120C480 95 460 70 440 55" stroke="currentColor" strokeWidth="3" opacity="0.15"/>
            <path d="M800 105C820 80 840 55 860 40" stroke="currentColor" strokeWidth="3" opacity="0.15"/>
            
            {/* Leaves hanging from branches */}
            <g className={styles.leafRustle}>
              <ellipse cx="180" cy="100" rx="5" ry="8" fill="currentColor" opacity="0.4"/>
              <ellipse cx="320" cy="85" rx="6" ry="9" fill="currentColor" opacity="0.4"/>
              <ellipse cx="520" cy="110" rx="4" ry="7" fill="currentColor" opacity="0.4"/>
              <ellipse cx="680" cy="88" rx="5" ry="8" fill="currentColor" opacity="0.4"/>
              <ellipse cx="840" cy="95" rx="6" ry="9" fill="currentColor" opacity="0.4"/>
            </g>
            
            {/* Branch nodes and growth points */}
            <circle cx="250" cy="110" r="2" fill="currentColor" opacity="0.3"/>
            <circle cx="550" cy="118" r="2.5" fill="currentColor" opacity="0.3"/>
            <circle cx="850" cy="108" r="2.2" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Wildlife Elements */}
        {/* Flying birds across the canopy */}
        <div className={`absolute top-20 left-0 w-4 h-2 ${styles.birdFly} ${styles.delay2}`}>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M2 4C4 2 6 2 8 4C10 2 12 2 14 4" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
        
        <div className={`absolute top-32 left-0 w-3 h-2 ${styles.birdFly} ${styles.delay8}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M1 4C3 2 5 2 7 4C9 2 11 2 11 4" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        </div>
        
        {/* Butterfly near flowers */}
        <div className={`absolute top-1/3 left-1/3 w-6 h-4 ${styles.butterflyDance} ${styles.delay6}`}>
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <ellipse cx="8" cy="6" rx="4" ry="3" fill="currentColor" opacity="0.6"/>
            <ellipse cx="16" cy="6" rx="4" ry="3" fill="currentColor" opacity="0.6"/>
            <ellipse cx="8" cy="10" rx="3" ry="2" fill="currentColor" opacity="0.5"/>
            <ellipse cx="16" cy="10" rx="3" ry="2" fill="currentColor" opacity="0.5"/>
            <path d="M12 6L12 10" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Floating flower petals */}
        <div className={`absolute top-2/5 left-1/4 w-2 h-2 ${styles.petalFloat} ${styles.delay3}`}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <ellipse cx="4" cy="4" rx="3" ry="1.5" fill="currentColor" opacity="0.7"/>
          </svg>
        </div>
        
        <div className={`absolute top-1/2 left-3/4 w-3 h-3 ${styles.petalFloat} ${styles.delay9}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <ellipse cx="6" cy="6" rx="4" ry="2" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Flowering Branch with Berry Clusters */}
        <div className={`absolute top-1/3 left-1/4 ${styles.midgroundLayer} ${styles.branchSway} ${styles.flowerBloom} ${styles.delay4}`}>
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Main flowering branch */}
            <path d="M10 50C30 45 50 40 80 35C100 32 120 28 130 25" stroke="currentColor" strokeWidth="4" opacity="0.5"/>
            {/* Side branches with flowers */}
            <path d="M40 42C45 30 50 18 55 10" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <path d="M70 37C75 25 80 13 85 8" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <path d="M100 30C105 42 110 54 115 65" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            
            {/* Flower blooms */}
            <g className={styles.flowerBloom}>
              <circle cx="55" cy="12" r="4" fill="currentColor" opacity="0.7"/>
              <circle cx="53" cy="10" r="2" fill="currentColor" opacity="0.4"/>
              <circle cx="57" cy="10" r="2" fill="currentColor" opacity="0.4"/>
              <circle cx="55" cy="14" r="2" fill="currentColor" opacity="0.4"/>
            </g>
            
            <g className={styles.flowerBloom}>
              <circle cx="85" cy="10" r="5" fill="currentColor" opacity="0.6"/>
              <circle cx="82" cy="8" r="2.5" fill="currentColor" opacity="0.3"/>
              <circle cx="88" cy="8" r="2.5" fill="currentColor" opacity="0.3"/>
              <circle cx="85" cy="13" r="2.5" fill="currentColor" opacity="0.3"/>
            </g>
            
            {/* Berry clusters */}
            <g className={styles.berryBob}>
              <circle cx="112" cy="62" r="2.5" fill="currentColor" opacity="0.8"/>
              <circle cx="115" cy="65" r="2" fill="currentColor" opacity="0.7"/>
              <circle cx="118" cy="63" r="2.2" fill="currentColor" opacity="0.75"/>
              <circle cx="116" cy="60" r="1.8" fill="currentColor" opacity="0.6"/>
            </g>
            
            {/* Dewdrops on leaves */}
            <g className={styles.dewdropShimmer}>
              <circle cx="60" cy="25" r="1" fill="currentColor" opacity="0.9"/>
              <circle cx="90" cy="18" r="0.8" fill="currentColor" opacity="0.8"/>
              <circle cx="105" cy="45" r="1.2" fill="currentColor" opacity="0.7"/>
            </g>
            
            {/* Branch leaves */}
            <ellipse cx="48" cy="35" rx="6" ry="9" fill="currentColor" opacity="0.6"/>
            <ellipse cx="78" cy="28" rx="7" ry="10" fill="currentColor" opacity="0.6"/>
            <ellipse cx="108" cy="50" rx="5" ry="8" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Dense Fern Garden */}
        <div className={`absolute bottom-1/4 right-1/6 ${styles.midgroundLayer} ${styles.fernSway} ${styles.delay6}`}>
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Multiple fern fronds */}
            {[...Array(6)].map((_, i) => {
              const x = 15 + (i * 10);
              const width = 8 + (i * 2);
              return (
                <g key={i} className={i % 2 ? styles.fernSway : styles.floatDelicate}>
                  {/* Fern stem */}
                  <path d={`M${x} 100L${x} 20`} stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  {/* Fern leaflets */}
                  {[...Array(8)].map((_, j) => {
                    const y = 25 + (j * 8);
                    return (
                      <g key={j}>
                        <path d={`M${x} ${y}C${x-width} ${y-2} ${x-width*1.2} ${y+1} ${x-width} ${y+3}C${x-width*0.6} ${y+1} ${x} ${y} ${x} ${y}`} 
                              fill="currentColor" opacity="0.6"/>
                        <path d={`M${x} ${y}C${x+width} ${y-2} ${x+width*1.2} ${y+1} ${x+width} ${y+3}C${x+width*0.6} ${y+1} ${x} ${y} ${x} ${y}`} 
                              fill="currentColor" opacity="0.6"/>
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>
        
        {/* Complex Realistic Leaves */}
        
        {/* Serrated Oak Leaf - top right */}
        <div className={`absolute top-1/4 right-1/6 ${styles.midgroundLayer} ${styles.floatSlow} ${styles.delay3}`}>
          <svg width="70" height="90" viewBox="0 0 70 90" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Main leaf shape with serrated edges */}
            <path d="M35 5C45 8 55 15 58 25C60 30 62 35 58 40C55 45 60 50 58 55C55 60 60 65 58 70C55 75 50 80 35 85C20 80 15 75 12 70C10 65 15 60 12 55C10 50 15 45 12 40C10 35 12 30 15 25C18 15 25 8 35 5Z" 
                  fill="currentColor" opacity="0.6"/>
            {/* Main vein */}
            <path d="M35 5L35 85" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
            {/* Secondary veins */}
            <path d="M20 25C25 30 30 35 35 40C40 35 45 30 50 25" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            <path d="M18 45C23 48 29 50 35 52C41 50 47 48 52 45" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            <path d="M20 65C25 67 30 68 35 69C40 68 45 67 50 65" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            {/* Detailed vein network */}
            <path d="M25 20C28 25 32 30 35 35" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            <path d="M45 20C42 25 38 30 35 35" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            <path d="M25 55C28 58 32 60 35 62" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            <path d="M45 55C42 58 38 60 35 62" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
          </svg>
        </div>
        
        {/* Compound Leaf - middle left */}
        <div className={`absolute top-1/2 left-1/12 ${styles.midgroundLayer} ${styles.floatGentle} ${styles.swayLeft} ${styles.delay5}`}>
          <svg width="55" height="75" viewBox="0 0 55 75" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Central stem */}
            <path d="M27.5 5L27.5 70" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            
            {/* Leaflet 1 - top */}
            <ellipse cx="27.5" cy="12" rx="8" ry="12" fill="currentColor" opacity="0.6"/>
            <path d="M27.5 5L27.5 17" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            
            {/* Leaflet 2 - upper left */}
            <ellipse cx="18" cy="25" rx="7" ry="10" fill="currentColor" opacity="0.6"/>
            <path d="M25 22L18 25" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <path d="M18 18L18 32" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            
            {/* Leaflet 3 - upper right */}
            <ellipse cx="37" cy="25" rx="7" ry="10" fill="currentColor" opacity="0.6"/>
            <path d="M30 22L37 25" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <path d="M37 18L37 32" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            
            {/* Leaflet 4 - middle left */}
            <ellipse cx="15" cy="45" rx="8" ry="11" fill="currentColor" opacity="0.6"/>
            <path d="M25 42L15 45" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <path d="M15 37L15 53" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            
            {/* Leaflet 5 - middle right */}
            <ellipse cx="40" cy="45" rx="8" ry="11" fill="currentColor" opacity="0.6"/>
            <path d="M30 42L40 45" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <path d="M40 37L40 53" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            
            {/* Leaflet 6 - lower left */}
            <ellipse cx="20" cy="62" rx="6" ry="9" fill="currentColor" opacity="0.6"/>
            <path d="M26 60L20 62" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <path d="M20 56L20 68" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
            
            {/* Leaflet 7 - lower right */}
            <ellipse cx="35" cy="62" rx="6" ry="9" fill="currentColor" opacity="0.6"/>
            <path d="M29 60L35 62" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <path d="M35 56L35 68" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
          </svg>
        </div>
        
        {/* Heart-shaped leaf with detailed veins - bottom left */}
        <div className={`absolute bottom-1/3 left-1/5 ${styles.midgroundLayer} ${styles.floatDelicate} ${styles.delay2}`}>
          <svg width="45" height="50" viewBox="0 0 45 50" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Heart-shaped leaf */}
            <path d="M22.5 8C18 3 12 3 10 8C8 13 12 18 22.5 45C33 18 37 13 35 8C33 3 27 3 22.5 8Z" 
                  fill="currentColor" opacity="0.7"/>
            {/* Central vein */}
            <path d="M22.5 8L22.5 45" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            {/* Left side veins */}
            <path d="M15 15C17 18 20 22 22.5 25" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            <path d="M12 25C15 28 19 32 22.5 35" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            {/* Right side veins */}
            <path d="M30 15C28 18 25 22 22.5 25" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            <path d="M33 25C30 28 26 32 22.5 35" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            {/* Fine vein details */}
            <path d="M18 12C19 15 21 18 22.5 20" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
            <path d="M27 12C26 15 24 18 22.5 20" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
          </svg>
        </div>
        
        {/* Branch connecting elements */}
        <div className={`absolute top-1/5 left-2/3 ${styles.midgroundLayer} ${styles.branchSway} ${styles.delay4}`}>
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Main branch */}
            <path d="M10 40C30 38 50 35 70 30C85 27 100 25 110 20" 
                  stroke="currentColor" strokeWidth="3" opacity="0.4" fill="none"/>
            {/* Secondary branches */}
            <path d="M35 35C40 25 45 15 50 8" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
            <path d="M65 32C70 42 75 52 80 60" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
            <path d="M85 28C90 35 95 42 100 50" stroke="currentColor" strokeWidth="1.2" opacity="0.3"/>
            
            {/* Small leaves on branch */}
            <ellipse cx="45" cy="12" rx="4" ry="6" fill="currentColor" opacity="0.5"/>
            <ellipse cx="75" cy="55" rx="5" ry="7" fill="currentColor" opacity="0.5"/>
            <ellipse cx="95" cy="45" rx="3" ry="5" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
        
        {/* Foreground Layer - Prominent Garden Elements */}
        
        {/* Enhanced Page Border Grass */}
        <div className={`absolute top-0 left-0 w-full h-12 ${styles.foregroundLayer}`}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`absolute top-0 ${styles.grassWave} ${i % 3 === 0 ? styles.delay2 : i % 3 === 1 ? styles.delay4 : styles.delay6}`} 
                 style={{ left: (i * 5) + '%' }}>
              <svg width="15" height="25" viewBox="0 0 15 25" className="text-[rgb(var(--color-tertiary))]">
                <path d="M7.5 25C7.5 20 6 15 7.5 10C9 5 7.5 2 7.5 0" stroke="currentColor" strokeWidth="1.2" opacity="0.6" fill="none"/>
                <path d="M6 25C6 20 4.5 15 6 10C7.5 5 6 2 6 0" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none"/>
                <path d="M9 25C9 20 10.5 15 9 10C7.5 5 9 2 9 0" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none"/>
              </svg>
            </div>
          ))}
        </div>
        
        <div className={`absolute top-0 right-0 w-full h-12 ${styles.foregroundLayer}`}>
          {[...Array(18)].map((_, i) => (
            <div key={i} className={`absolute top-0 ${styles.grassWave} ${i % 3 === 0 ? styles.delay1 : i % 3 === 1 ? styles.delay5 : styles.delay7}`} 
                 style={{ right: (i * 5.5) + '%' }}>
              <svg width="12" height="20" viewBox="0 0 12 20" className="text-[rgb(var(--color-tertiary))]">
                <path d="M6 20C6 16 5 12 6 8C7 4 6 1 6 0" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none"/>
                <path d="M4.5 20C4.5 16 3.5 12 4.5 8C5.5 4 4.5 1 4.5 0" stroke="currentColor" strokeWidth="0.6" opacity="0.3" fill="none"/>
                <path d="M7.5 20C7.5 16 8.5 12 7.5 8C6.5 4 7.5 1 7.5 0" stroke="currentColor" strokeWidth="0.6" opacity="0.3" fill="none"/>
              </svg>
            </div>
          ))}
        </div>
        
        {/* Detailed Fern Frond - center right */}
        <div className={`absolute top-3/5 right-1/4 ${styles.foregroundLayer} ${styles.driftUpward} ${styles.swayRight} ${styles.delay6}`}>
          <svg width="65" height="85" viewBox="0 0 65 85" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Main stem */}
            <path d="M32.5 5L32.5 80" stroke="currentColor" strokeWidth="1.8" opacity="0.6"/>
            
            {/* Fern leaflets - decreasing size from bottom to top */}
            {[...Array(12)].map((_, i) => {
              const y = 15 + (i * 5.5);
              const size = Math.max(3, 8 - (i * 0.4));
              return (
                <g key={i}>
                  <path d={`M32.5 ${y}C${32.5-size} ${y-2} ${32.5-size*1.5} ${y+1} ${32.5-size} ${y+4}C${32.5-size*0.5} ${y+2} ${32.5} ${y+1} 32.5 ${y}`} 
                        fill="currentColor" opacity="0.6"/>
                  <path d={`M32.5 ${y}C${32.5+size} ${y-2} ${32.5+size*1.5} ${y+1} ${32.5+size} ${y+4}C${32.5+size*0.5} ${y+2} ${32.5} ${y+1} 32.5 ${y}`} 
                        fill="currentColor" opacity="0.6"/>
                </g>
              );
            })}
          </svg>
        </div>
        
        {/* Flower bud cluster - top center */}
        <div className={`absolute top-1/5 left-2/3 ${styles.foregroundLayer} ${styles.budBloom} ${styles.delay7}`}>
          <svg width="40" height="55" viewBox="0 0 40 55" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Main stem */}
            <path d="M20 45L20 10" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            
            {/* Main flower bud */}
            <ellipse cx="20" cy="15" rx="8" ry="12" fill="currentColor" opacity="0.7"/>
            <ellipse cx="20" cy="13" rx="6" ry="8" fill="currentColor" opacity="0.3"/>
            
            {/* Sepals */}
            <path d="M12 20C14 25 18 28 20 25C22 28 26 25 28 20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            
            {/* Side buds */}
            <ellipse cx="15" cy="25" rx="4" ry="6" fill="currentColor" opacity="0.6"/>
            <ellipse cx="25" cy="25" rx="4" ry="6" fill="currentColor" opacity="0.6"/>
            
            {/* Small buds */}
            <circle cx="12" cy="35" r="2.5" fill="currentColor" opacity="0.5"/>
            <circle cx="28" cy="35" r="2.5" fill="currentColor" opacity="0.5"/>
            
            {/* Leaves */}
            <ellipse cx="10" cy="40" rx="5" ry="8" fill="currentColor" opacity="0.5"/>
            <ellipse cx="30" cy="40" rx="5" ry="8" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
        
        {/* Large Maple-style leaf - bottom center */}
        <div className={`absolute bottom-1/5 left-1/2 transform -translate-x-1/2 ${styles.foregroundLayer} ${styles.breathe} ${styles.gentleRotate} ${styles.delay1}`}>
          <svg width="90" height="95" viewBox="0 0 90 95" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Maple leaf shape with 5 lobes */}
            <path d="M45 10C50 15 55 20 60 15C65 20 70 25 65 30C70 35 65 40 60 45C65 50 70 55 65 60C60 55 55 60 50 65C45 70 40 75 35 70C30 65 25 60 20 65C15 60 10 55 15 50C10 45 15 40 20 35C15 30 20 25 25 20C30 15 35 20 40 15C45 20 50 15 45 10Z" 
                  fill="currentColor" opacity="0.7"/>
            {/* Main vein */}
            <path d="M45 10L45 85" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            {/* Primary veins to each lobe */}
            <path d="M45 25L60 15" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            <path d="M45 25L30 15" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            <path d="M45 45L65 30" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            <path d="M45 45L25 30" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            <path d="M45 65L65 60" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            <path d="M45 65L25 60" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            {/* Secondary vein network */}
            <path d="M40 35C42 40 43 45 45 50" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
            <path d="M50 35C48 40 47 45 45 50" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Delicate trailing vine - right edge */}
        <div className={`absolute top-2/5 right-1/8 h-80 ${styles.foregroundLayer} ${styles.vineCurl} ${styles.delay3}`}>
          <svg width="40" height="100%" viewBox="0 0 40 320" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Curling vine */}
            <path d="M5 0C10 40 20 80 30 120C35 160 25 200 15 240C10 280 15 320 15 320" 
                  stroke="currentColor" strokeWidth="1.5" opacity="0.5" fill="none"/>
            
            {/* Tendrils */}
            <path d="M15 60C20 58 22 62 18 65C22 67 20 71 15 70" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none"/>
            <path d="M25 140C30 138 32 142 28 145C32 147 30 151 25 150" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none"/>
            <path d="M12 220C17 218 19 222 15 225C19 227 17 231 12 230" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none"/>
            
            {/* Small vine leaves */}
            <ellipse cx="18" cy="50" rx="3" ry="5" fill="currentColor" opacity="0.6"/>
            <ellipse cx="28" cy="130" rx="4" ry="6" fill="currentColor" opacity="0.6"/>
            <ellipse cx="15" cy="210" rx="3" ry="4" fill="currentColor" opacity="0.6"/>
            <ellipse cx="20" cy="280" rx="2.5" ry="4" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
      </div>


      {/* 1. Header Section - Forest Canopy Theme */}
      <section className="min-h-screen justify-center flex flex-col items-center py-20 md:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        
        {/* Forest Canopy Overhead - Section Specific */}
        <div className={`absolute top-0 left-0 w-full h-full ${styles.canopySway} ${styles.delay2}`}>
          <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {/* Major canopy branches overhead */}
            <path d="M0 60C200 50 400 70 600 55C800 40 1000 60 1200 50L1200 0L0 0Z" 
                  fill="currentColor" opacity="0.15"/>
            <path d="M0 120C300 100 600 130 900 110C1050 105 1150 120 1200 110L1200 0L0 0Z" 
                  fill="currentColor" opacity="0.12"/>
            
            {/* Dense foliage clusters */}
            <circle cx="150" cy="40" r="35" fill="currentColor" opacity="0.1"/>
            <circle cx="350" cy="65" r="45" fill="currentColor" opacity="0.08"/>
            <circle cx="550" cy="45" r="40" fill="currentColor" opacity="0.09"/>
            <circle cx="750" cy="70" r="50" fill="currentColor" opacity="0.07"/>
            <circle cx="950" cy="50" r="38" fill="currentColor" opacity="0.1"/>
            
            {/* Morning mist effect */}
            <path d="M0 150C200 140 400 160 600 145C800 130 1000 150 1200 140L1200 180L0 180Z" 
                  fill="currentColor" opacity="0.04"/>
          </svg>
        </div>
        
        {/* Birds in canopy branches */}
        <div className={`absolute top-12 left-20 w-3 h-2 ${styles.birdFly} ${styles.delay4}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M2 4C4 2 6 2 8 4C10 2 12 2 10 4" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
          </svg>
        </div>
        
        <div className={`absolute top-20 right-32 w-4 h-2 ${styles.birdFly} ${styles.delay6}`}>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M2 4C4 2 6 2 8 4C10 2 12 2 14 4" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Dappled morning light through canopy */}
        <div className={`absolute top-0 left-0 w-full h-full ${styles.sunbeamFilter} ${styles.delay1}`}>
          <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M100 0L85 120L115 120Z" fill="currentColor" opacity="0.06"/>
            <path d="M300 0L285 140L315 140Z" fill="currentColor" opacity="0.04"/>
            <path d="M500 0L480 160L520 160Z" fill="currentColor" opacity="0.05"/>
            <path d="M700 0L685 130L715 130Z" fill="currentColor" opacity="0.07"/>
            <path d="M900 0L885 150L915 150Z" fill="currentColor" opacity="0.05"/>
            <path d="M1100 0L1080 140L1120 140Z" fill="currentColor" opacity="0.06"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 pt-32 pb-24 text-center relative z-10">
          {/* Hero badge with zen theme */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Leaf className="w-5 h-5 text-[rgb(var(--color-tertiary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.pages.leShiatsu.badge}</span>
          </div>
          
          {/* Main title with elegant gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-tertiary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-12">
            {t.subtitle}
          </p>
          
          {/* Organic harmony indicator with leaf elements */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <svg width="12" height="16" viewBox="0 0 12 16" className="text-[rgb(var(--color-tertiary))] opacity-60 animate-pulse">
              <path d="M6 1C8.5 2.5 10.5 5.5 10.5 8.5C10.5 11.5 8.5 14 6 14.5C3.5 14 1.5 11.5 1.5 8.5C1.5 5.5 3.5 2.5 6 1Z" fill="currentColor"/>
            </svg>
            <div className="w-16 h-px bg-gradient-to-r from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))]"></div>
            <Circle className="w-6 h-6 text-[rgb(var(--color-secondary))]" />
            <div className="w-16 h-px bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))]"></div>
            <svg width="12" height="16" viewBox="0 0 12 16" className="text-[rgb(var(--color-primary))] opacity-60 animate-pulse delay-500">
              <path d="M6 1C8.5 2.5 10.5 5.5 10.5 8.5C10.5 11.5 8.5 14 6 14.5C3.5 14 1.5 11.5 1.5 8.5C1.5 5.5 3.5 2.5 6 1Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Continuous Garden Flow - Connecting All Sections */}
      <div className={`absolute top-0 left-0 w-full h-full ${styles.backgroundLayer} ${styles.vineGrow} ${styles.delay1}`} style={{ zIndex: 1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 3000" fill="none" className="text-[rgb(var(--color-tertiary))]">
          {/* Main connecting vine flowing through all sections */}
          <path d="M50 100C200 200 400 300 600 500C800 700 1000 900 1150 1200C1000 1500 800 1800 600 2000C400 2200 200 2400 100 2600C150 2700 200 2800 250 2900" 
                stroke="currentColor" strokeWidth="2" opacity="0.08" fill="none"/>
          
          {/* Secondary connecting vines */}
          <path d="M1150 150C1000 250 800 350 600 550C400 750 200 950 50 1250C200 1550 400 1850 600 2050C800 2250 1000 2450 1100 2650" 
                stroke="currentColor" strokeWidth="1.5" opacity="0.06" fill="none"/>
          
          {/* Tertiary fine connections */}
          <path d="M300 80C450 180 550 280 650 480C750 680 850 880 950 1180C850 1480 750 1780 650 1980C550 2180 450 2380 350 2580" 
                stroke="currentColor" strokeWidth="1" opacity="0.04" fill="none"/>
                
          {/* Underground root network - visible connecting sections */}
          <g opacity="0.03">
            <path d="M0 800C200 790 400 810 600 800C800 790 1000 810 1200 800" stroke="currentColor" strokeWidth="3"/>
            <path d="M0 1600C200 1590 400 1610 600 1600C800 1590 1000 1610 1200 1600" stroke="currentColor" strokeWidth="3"/>
            <path d="M0 2400C200 2390 400 2410 600 2400C800 2390 1000 2410 1200 2400" stroke="currentColor" strokeWidth="3"/>
            
            {/* Root tendrils */}
            <path d="M300 800C320 850 340 900 360 950" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M700 1600C720 1650 740 1700 760 1750" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M500 2400C520 2450 540 2500 560 2550" stroke="currentColor" strokeWidth="1.5"/>
          </g>
          
          {/* Small leaves along connecting vines */}
          <ellipse cx="250" cy="180" rx="3" ry="5" fill="currentColor" opacity="0.08"/>
          <ellipse cx="550" cy="380" rx="4" ry="6" fill="currentColor" opacity="0.07"/>
          <ellipse cx="850" cy="680" rx="3.5" ry="5.5" fill="currentColor" opacity="0.09"/>
          <ellipse cx="450" cy="1280" rx="4" ry="6" fill="currentColor" opacity="0.08"/>
          <ellipse cx="750" cy="1680" rx="3" ry="5" fill="currentColor" opacity="0.07"/>
          <ellipse cx="350" cy="2180" rx="4.5" ry="7" fill="currentColor" opacity="0.08"/>
        </svg>
      </div>

      <main className="container mx-auto px-6 py-20 lg:py-32 space-y-24 relative z-10">

        {/* 2. Definition Section - Peaceful Grove Theme */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          
          {/* Peaceful Grove Background */}
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${styles.backgroundLayer}`}>
            {/* Side trees creating natural frame */}
            <div className={`absolute top-0 left-0 w-24 h-full ${styles.treeRustle} ${styles.delay3}`}>
              <svg width="96" height="100%" viewBox="0 0 96 600" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <path d="M48 500L48 600" stroke="currentColor" strokeWidth="8" opacity="0.2"/>
                <path d="M20 300C15 250 20 200 35 180C50 160 65 170 75 180C90 200 85 250 80 300C75 350 70 400 48 450C26 400 25 350 20 300Z" 
                      fill="currentColor" opacity="0.08"/>
                <circle cx="40" cy="220" r="25" fill="currentColor" opacity="0.06"/>
                <circle cx="65" cy="210" r="20" fill="currentColor" opacity="0.05"/>
                <circle cx="48" cy="280" r="30" fill="currentColor" opacity="0.07"/>
              </svg>
            </div>
            
            <div className={`absolute top-0 right-0 w-28 h-full ${styles.treeRustle} ${styles.delay5}`}>
              <svg width="112" height="100%" viewBox="0 0 112 600" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <path d="M56 480L56 600" stroke="currentColor" strokeWidth="10" opacity="0.18"/>
                <path d="M25 280C18 230 25 180 40 160C55 140 70 150 85 160C100 180 95 230 90 280C85 330 80 380 56 430C32 380 32 330 25 280Z" 
                      fill="currentColor" opacity="0.07"/>
                <circle cx="45" cy="200" r="28" fill="currentColor" opacity="0.05"/>
                <circle cx="75" cy="190" r="22" fill="currentColor" opacity="0.06"/>
                <circle cx="56" cy="260" r="35" fill="currentColor" opacity="0.06"/>
              </svg>
            </div>
            
            {/* Flowering bushes around content */}
            <div className={`absolute bottom-20 left-1/4 ${styles.flowerBloom} ${styles.delay4}`}>
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <ellipse cx="20" cy="45" rx="15" ry="10" fill="currentColor" opacity="0.15"/>
                <ellipse cx="45" cy="40" rx="18" ry="12" fill="currentColor" opacity="0.12"/>
                <ellipse cx="65" cy="48" rx="12" ry="8" fill="currentColor" opacity="0.14"/>
                
                {/* Small flowers on bushes */}
                <circle cx="18" cy="35" r="2" fill="currentColor" opacity="0.3"/>
                <circle cx="25" cy="32" r="1.5" fill="currentColor" opacity="0.3"/>
                <circle cx="42" cy="30" r="2.2" fill="currentColor" opacity="0.3"/>
                <circle cx="50" cy="28" r="1.8" fill="currentColor" opacity="0.3"/>
                <circle cx="68" cy="38" r="1.5" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
            
            <div className={`absolute bottom-16 right-1/4 ${styles.flowerBloom} ${styles.delay6}`}>
              <svg width="70" height="55" viewBox="0 0 70 55" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <ellipse cx="18" cy="42" rx="12" ry="9" fill="currentColor" opacity="0.13"/>
                <ellipse cx="38" cy="38" rx="16" ry="11" fill="currentColor" opacity="0.11"/>
                <ellipse cx="58" cy="45" rx="10" ry="7" fill="currentColor" opacity="0.15"/>
                
                {/* Fern-like plants */}
                {[...Array(5)].map((_, i) => (
                  <g key={i}>
                    <path d={`M${15 + i*10} 35L${15 + i*10} 15`} stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                    <path d={`M${15 + i*10} 25C${10 + i*10} 23 ${8 + i*10} 27 ${12 + i*10} 29`} fill="currentColor" opacity="0.1"/>
                    <path d={`M${15 + i*10} 25C${20 + i*10} 23 ${22 + i*10} 27 ${18 + i*10} 29`} fill="currentColor" opacity="0.1"/>
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Gentle stream-like flowing elements */}
            <div className={`absolute bottom-0 left-0 w-full h-16 ${styles.vineGrow} ${styles.delay2}`}>
              <svg width="100%" height="64" viewBox="0 0 1200 64" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <path d="M0 40C200 35 400 45 600 40C800 35 1000 45 1200 40" 
                      stroke="currentColor" strokeWidth="1.5" opacity="0.1" fill="none"/>
                <path d="M100 42C200 38 300 46 400 42C500 38 600 46 700 42" 
                      stroke="currentColor" strokeWidth="1" opacity="0.08" fill="none"/>
                
                {/* Small pebbles along stream */}
                <circle cx="150" cy="42" r="1.5" fill="currentColor" opacity="0.12"/>
                <circle cx="350" cy="45" r="2" fill="currentColor" opacity="0.1"/>
                <circle cx="550" cy="41" r="1.2" fill="currentColor" opacity="0.13"/>
                <circle cx="750" cy="44" r="1.8" fill="currentColor" opacity="0.09"/>
              </svg>
            </div>
          </div>
          
          {/* Image with sophisticated styling */}
          <div className="relative group z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/20 to-[rgb(var(--color-secondary))]/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
              <Image
                src="/images/shiatsu-general.png" 
                alt={dictionary.pages.leShiatsu.imageAlt}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-tertiary))]/20 to-transparent"></div>
            </div>
          </div>

          {/* Content with enhanced styling */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-4 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-sm shadow-lg">
              <BookOpen className="w-4 h-4" />
              {dictionary.pages.leShiatsu.foundations}
            </div>

            <h2 className="text-4xl font-bold text-foreground">{t.general.definition.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.definition.p1}</p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                {t.general.history.heading}
              </h3>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.history.p1}</p>
            </div>
          </div>
        </section>

        {/* Living Vine Section Divider */}
        <div className="flex justify-center items-center py-16 relative">
          <div className={`${styles.vineGrow} ${styles.delay3}`}>
            <svg width="400" height="60" viewBox="0 0 400 60" fill="none" className="text-[rgb(var(--color-tertiary))]">
              {/* Central flowing vine */}
              <path d="M50 30C100 25 150 35 200 30C250 25 300 35 350 30" 
                    stroke="currentColor" strokeWidth="2" opacity="0.4" fill="none"/>
              
              {/* Growing leaves along the vine */}
              <g className={styles.flowerBloom}>
                <ellipse cx="120" cy="25" rx="5" ry="8" fill="currentColor" opacity="0.6"/>
                <path d="M120 20L120 30" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
              </g>
              
              <g className={styles.flowerBloom}>
                <ellipse cx="200" cy="35" rx="6" ry="9" fill="currentColor" opacity="0.7"/>
                <path d="M200 28L200 42" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
                <path d="M195 32C197 35 198 38 200 40" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
                <path d="M205 32C203 35 202 38 200 40" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
              </g>
              
              <g className={styles.flowerBloom}>
                <ellipse cx="280" cy="25" rx="4" ry="7" fill="currentColor" opacity="0.6"/>
                <path d="M280 20L280 29" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
              </g>
              
              {/* Vine tendrils */}
              <path d="M150 30C155 35 160 32 158 28C162 26 160 22 155 24" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none"/>
              <path d="M250 30C245 35 240 32 242 28C238 26 240 22 245 24" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none"/>
              
              {/* Small flower buds */}
              <circle cx="170" cy="28" r="2" fill="currentColor" opacity="0.5"/>
              <circle cx="230" cy="32" r="1.5" fill="currentColor" opacity="0.5"/>
              <circle cx="320" cy="28" r="2.5" fill="currentColor" opacity="0.5"/>
              
              {/* Dewdrops */}
              <circle cx="125" cy="22" r="0.8" fill="currentColor" opacity="0.8" className={styles.dewdropShimmer}/>
              <circle cx="205" cy="38" r="1" fill="currentColor" opacity="0.9" className={styles.dewdropShimmer}/>
              <circle cx="285" cy="23" r="0.6" fill="currentColor" opacity="0.7" className={styles.dewdropShimmer}/>
            </svg>
          </div>
        </div>

        {/* 3. Principles Section - Zen Garden Theme */}
        <section className="max-w-6xl mx-auto relative">
          
          {/* Zen Garden Background */}
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${styles.backgroundLayer}`}>
            {/* Ornamental bonsai-style trees */}
            <div className={`absolute top-10 right-10 ${styles.branchWave} ${styles.delay3}`}>
              <svg width="120" height="150" viewBox="0 0 120 150" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Bonsai-style tree */}
                <path d="M60 120L60 150" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
                {/* Artistic curved trunk */}
                <path d="M60 120C55 100 50 80 45 65C40 50 50 45 65 50C80 55 85 70 80 85C75 100 70 110 60 120" 
                      stroke="currentColor" strokeWidth="3" opacity="0.2"/>
                {/* Carefully shaped foliage */}
                <circle cx="45" cy="60" r="18" fill="currentColor" opacity="0.12"/>
                <circle cx="70" cy="70" r="15" fill="currentColor" opacity="0.1"/>
                <circle cx="58" cy="45" r="20" fill="currentColor" opacity="0.11"/>
                
                {/* Fine branch details */}
                <path d="M45 65C40 60 35 55 32 50" stroke="currentColor" strokeWidth="1.5" opacity="0.15"/>
                <path d="M70 75C75 70 80 65 83 60" stroke="currentColor" strokeWidth="1.5" opacity="0.15"/>
              </svg>
            </div>
            
            <div className={`absolute bottom-20 left-8 ${styles.branchWave} ${styles.delay7}`}>
              <svg width="100" height="130" viewBox="0 0 100 130" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Another bonsai specimen */}
                <path d="M50 100L50 130" stroke="currentColor" strokeWidth="3.5" opacity="0.22"/>
                <path d="M50 100C45 85 40 70 35 55C30 40 40 35 55 40C70 45 75 60 70 75C65 90 60 95 50 100" 
                      stroke="currentColor" strokeWidth="2.5" opacity="0.18"/>
                <circle cx="38" cy="50" r="16" fill="currentColor" opacity="0.1"/>
                <circle cx="62" cy="65" r="13" fill="currentColor" opacity="0.09"/>
                <circle cx="50" cy="35" r="18" fill="currentColor" opacity="0.11"/>
              </svg>
            </div>
            
            {/* Meditation stones */}
            <div className={`absolute top-1/2 left-20 ${styles.mossGrow} ${styles.delay5}`}>
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <ellipse cx="15" cy="20" rx="8" ry="5" fill="currentColor" opacity="0.15"/>
                <ellipse cx="35" cy="18" rx="10" ry="6" fill="currentColor" opacity="0.12"/>
                <ellipse cx="50" cy="22" rx="6" ry="4" fill="currentColor" opacity="0.13"/>
                
                {/* Moss on stones */}
                <circle cx="12" cy="17" r="2" fill="currentColor" opacity="0.2"/>
                <circle cx="38" cy="15" r="2.5" fill="currentColor" opacity="0.18"/>
                <circle cx="52" cy="19" r="1.5" fill="currentColor" opacity="0.22"/>
              </svg>
            </div>
            
            <div className={`absolute bottom-32 right-16 ${styles.mossGrow} ${styles.delay8}`}>
              <svg width="70" height="35" viewBox="0 0 70 35" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <ellipse cx="20" cy="25" rx="12" ry="7" fill="currentColor" opacity="0.14"/>
                <ellipse cx="45" cy="22" rx="15" ry="8" fill="currentColor" opacity="0.11"/>
                <ellipse cx="60" cy="28" rx="8" ry="5" fill="currentColor" opacity="0.16"/>
              </svg>
            </div>
            
            {/* Raked sand patterns */}
            <div className={`absolute bottom-0 left-0 w-full h-20 ${styles.pathShimmer} ${styles.delay4}`}>
              <svg width="100%" height="80" viewBox="0 0 1200 80" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Curved rake lines */}
                <path d="M0 40C200 35 400 45 600 40C800 35 1000 45 1200 40" 
                      stroke="currentColor" strokeWidth="0.5" opacity="0.08"/>
                <path d="M0 50C200 45 400 55 600 50C800 45 1000 55 1200 50" 
                      stroke="currentColor" strokeWidth="0.5" opacity="0.06"/>
                <path d="M0 60C200 55 400 65 600 60C800 55 1000 65 1200 60" 
                      stroke="currentColor" strokeWidth="0.5" opacity="0.07"/>
                      
                {/* Small zen circles in sand */}
                <circle cx="300" cy="45" r="8" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.1"/>
                <circle cx="700" cy="55" r="10" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.08"/>
                <circle cx="900" cy="50" r="6" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.12"/>
              </svg>
            </div>
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-sm mb-8 shadow-lg">
              <Target className="w-4 h-4" />
              {dictionary.pages.leShiatsu.philosophyPractice}
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">{t.general.principles.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-4xl mx-auto">{t.general.principles.p1}</p>
          </div>

          {/* Objectives with enhanced design and leaf accents */}
          <div className="bg-card/60 backdrop-blur-md rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/5 to-[rgb(var(--color-primary))]/3 rounded-3xl"></div>
            
            {/* Leaf corner decorations */}
            <svg width="24" height="30" viewBox="0 0 24 30" className="absolute top-4 right-4 text-[rgb(var(--color-tertiary))] opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <path d="M12 2C17 5 22 12 22 18C22 24 17 28 12 29C7 28 2 24 2 18C2 12 7 5 12 2Z" fill="currentColor"/>
              <path d="M12 2L12 29" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            </svg>
            <svg width="20" height="25" viewBox="0 0 20 25" className="absolute bottom-4 left-4 text-[rgb(var(--color-tertiary))] opacity-15 group-hover:opacity-25 transition-opacity duration-500 rotate-180">
              <path d="M10 2C14 4 18 9 18 15C18 20 15 23 10 24C5 23 2 20 2 15C2 9 6 4 10 2Z" fill="currentColor"/>
              <path d="M10 2L10 24" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
            </svg>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-card-foreground text-center mb-10 flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                {t.general.objectives.heading}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.general.objectives.points.map((point, index) => (
                  <div 
                    key={point} 
                    className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Subtle leaf accent for cards */}
                    <svg width="12" height="15" viewBox="0 0 12 15" className="absolute top-2 right-2 text-[rgb(var(--color-tertiary))] opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <path d="M6 1C8.5 2.5 10.5 5 10.5 7.5C10.5 10 8.5 12 6 12.5C3.5 12 1.5 10 1.5 7.5C1.5 5 3.5 2.5 6 1Z" fill="currentColor"/>
                    </svg>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      index % 3 === 0 ? 'bg-[rgb(var(--color-tertiary))]' :
                      index % 3 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                      'bg-[rgb(var(--color-primary))]'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-card-foreground leading-relaxed group-hover:text-[rgb(var(--color-tertiary))] transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Techniques Section - Herb Garden Theme */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 rounded-3xl"></div>
          
          {/* Herb Garden Background */}
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${styles.backgroundLayer}`}>
            {/* Dense medicinal herb plantings */}
            <div className={`absolute top-10 left-10 ${styles.fernSway} ${styles.delay2}`}>
              <svg width="100" height="120" viewBox="0 0 100 120" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Organized herb rows */}
                {[...Array(4)].map((_, row) => (
                  <g key={row}>
                    {[...Array(6)].map((_, col) => (
                      <g key={col}>
                        <ellipse cx={15 + col * 12} cy={30 + row * 20} rx="4" ry="8" fill="currentColor" opacity="0.12"/>
                        <path d={`M${15 + col * 12} ${38 + row * 20}L${15 + col * 12} ${22 + row * 20}`} stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
                        
                        {/* Small herb flowers */}
                        <circle cx={15 + col * 12} cy={22 + row * 20} r="1.5" fill="currentColor" opacity="0.2"/>
                      </g>
                    ))}
                  </g>
                ))}
              </svg>
            </div>
            
            <div className={`absolute top-10 right-10 ${styles.fernSway} ${styles.delay4}`}>
              <svg width="100" height="120" viewBox="0 0 100 120" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Different herb varieties */}
                {[...Array(4)].map((_, row) => (
                  <g key={row}>
                    {[...Array(5)].map((_, col) => (
                      <g key={col}>
                        <ellipse cx={20 + col * 15} cy={35 + row * 18} rx="5" ry="10" fill="currentColor" opacity="0.1"/>
                        <ellipse cx={20 + col * 15} cy={32 + row * 18} rx="3" ry="6" fill="currentColor" opacity="0.15"/>
                        
                        {/* Herb seed heads */}
                        <circle cx={20 + col * 15} cy={25 + row * 18} r="2" fill="currentColor" opacity="0.18"/>
                      </g>
                    ))}
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Garden bed borders */}
            <div className={`absolute bottom-10 left-20 w-3/4 ${styles.pathShimmer} ${styles.delay6}`}>
              <svg width="100%" height="40" viewBox="0 0 800 40" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Wooden garden bed edges */}
                <rect x="0" y="15" width="800" height="8" fill="currentColor" opacity="0.12" rx="4"/>
                <rect x="0" y="25" width="800" height="8" fill="currentColor" opacity="0.08" rx="4"/>
                
                {/* Soil texture */}
                <circle cx="100" cy="20" r="1" fill="currentColor" opacity="0.1"/>
                <circle cx="200" cy="28" r="1.5" fill="currentColor" opacity="0.08"/>
                <circle cx="350" cy="22" r="1.2" fill="currentColor" opacity="0.09"/>
                <circle cx="500" cy="26" r="0.8" fill="currentColor" opacity="0.11"/>
                <circle cx="650" cy="24" r="1.3" fill="currentColor" opacity="0.07"/>
              </svg>
            </div>
            
            {/* Greenhouse/garden shed silhouette */}
            <div className={`absolute top-20 right-20 ${styles.backgroundLayer} ${styles.delay8}`}>
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Simple greenhouse structure */}
                <path d="M10 50L10 20L40 5L70 20L70 50L10 50Z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.06"/>
                <path d="M40 5L40 50" stroke="currentColor" strokeWidth="0.5" opacity="0.08"/>
                <path d="M25 20L25 50" stroke="currentColor" strokeWidth="0.3" opacity="0.06"/>
                <path d="M55 20L55 50" stroke="currentColor" strokeWidth="0.3" opacity="0.06"/>
                
                {/* Greenhouse panels */}
                <path d="M10 30L70 30" stroke="currentColor" strokeWidth="0.3" opacity="0.05"/>
                <path d="M10 40L70 40" stroke="currentColor" strokeWidth="0.3" opacity="0.05"/>
              </svg>
            </div>
            
            {/* Herb garden tools */}
            <div className={`absolute bottom-20 right-32 ${styles.delay9}`}>
              <svg width="40" height="50" viewBox="0 0 40 50" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Garden spade silhouette */}
                <path d="M20 10L20 45" stroke="currentColor" strokeWidth="1.5" opacity="0.1"/>
                <ellipse cx="20" cy="8" rx="3" ry="4" fill="currentColor" opacity="0.08"/>
                
                {/* Small watering can */}
                <path d="M28 25C32 25 35 28 35 32C35 36 32 39 28 39L25 39L25 25L28 25Z" 
                      fill="currentColor" opacity="0.06"/>
                <path d="M25 27L22 24" stroke="currentColor" strokeWidth="0.8" opacity="0.05"/>
              </svg>
            </div>
          </div>
          
          <div className="relative z-10 text-center p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-secondary))] font-semibold text-sm mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              {dictionary.pages.leShiatsu.methodsTechniques}
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-secondary-foreground">{t.general.techniques.heading}</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.techniques.p1}</p>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.techniques.p2}</p>
            </div>

            {/* Organic decorative elements */}
            <div className="flex justify-center items-center gap-3 mt-12">
              <svg width="14" height="18" viewBox="0 0 14 18" className="text-[rgb(var(--color-tertiary))] opacity-50 animate-pulse">
                <path d="M7 1C10 2.5 12 6 12 10C12 13.5 10 16 7 16.5C4 16 2 13.5 2 10C2 6 4 2.5 7 1Z" fill="currentColor"/>
              </svg>
              <svg width="10" height="14" viewBox="0 0 10 14" className="text-[rgb(var(--color-secondary))] opacity-60 animate-pulse delay-300">
                <path d="M5 1C7 2 8.5 4.5 8.5 7C8.5 9.5 7 12 5 12.5C3 12 1.5 9.5 1.5 7C1.5 4.5 3 2 5 1Z" fill="currentColor"/>
              </svg>
              <svg width="18" height="22" viewBox="0 0 18 22" className="text-[rgb(var(--color-primary))] opacity-55 animate-pulse delay-700">
                <path d="M9 1C13 3 16 7.5 16 12C16 16.5 13 20 9 21C5 20 2 16.5 2 12C2 7.5 5 3 9 1Z" fill="currentColor"/>
                <path d="M9 1L9 21" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
              </svg>
              <svg width="10" height="14" viewBox="0 0 10 14" className="text-[rgb(var(--color-secondary))] opacity-60 animate-pulse delay-300">
                <path d="M5 1C7 2 8.5 4.5 8.5 7C8.5 9.5 7 12 5 12.5C3 12 1.5 9.5 1.5 7C1.5 4.5 3 2 5 1Z" fill="currentColor"/>
              </svg>
              <svg width="14" height="18" viewBox="0 0 14 18" className="text-[rgb(var(--color-tertiary))] opacity-50 animate-pulse">
                <path d="M7 1C10 2.5 12 6 12 10C12 13.5 10 16 7 16.5C4 16 2 13.5 2 10C2 6 4 2.5 7 1Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </section>

        {/* 5. Schools Section - Botanical Collection Theme */}
        <section className="relative">
          
          {/* Diverse Botanical Collection Background */}
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${styles.backgroundLayer}`}>
            {/* Different tree species representing different schools */}
            
            {/* Japanese Maple (representing traditional Japanese school) */}
            <div className={`absolute top-10 left-10 ${styles.leafRustle} ${styles.delay2}`}>
              <svg width="80" height="100" viewBox="0 0 80 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <path d="M40 80L40 100" stroke="currentColor" strokeWidth="3" opacity="0.2"/>
                <path d="M40 20C35 15 30 15 25 20C30 25 35 25 40 20C45 25 50 25 55 20C50 15 45 15 40 20Z" 
                      fill="currentColor" opacity="0.12"/>
                <path d="M40 30C35 25 30 25 25 30C30 35 35 35 40 30C45 35 50 35 55 30C50 25 45 25 40 30Z" 
                      fill="currentColor" opacity="0.1"/>
                <circle cx="40" cy="50" r="20" fill="currentColor" opacity="0.08"/>
              </svg>
            </div>
            
            {/* European Oak (representing Western adaptations) */}
            <div className={`absolute top-20 right-10 ${styles.treeRustle} ${styles.delay4}`}>
              <svg width="90" height="120" viewBox="0 0 90 120" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <path d="M45 100L45 120" stroke="currentColor" strokeWidth="4" opacity="0.18"/>
                <path d="M20 60C15 40 20 20 35 15C50 10 65 20 70 40C75 60 65 80 45 90C25 80 15 60 20 60Z" 
                      fill="currentColor" opacity="0.09"/>
                <circle cx="35" cy="35" r="15" fill="currentColor" opacity="0.07"/>
                <circle cx="55" cy="45" r="18" fill="currentColor" opacity="0.06"/>
                <circle cx="45" cy="65" r="20" fill="currentColor" opacity="0.08"/>
              </svg>
            </div>
            
            {/* Bamboo grove (representing Zen influence) */}
            <div className={`absolute bottom-20 left-20 ${styles.grassWave} ${styles.delay6}`}>
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {[...Array(8)].map((_, i) => (
                  <g key={i}>
                    <path d={`M${8 + i*6} 60L${8 + i*6} 10`} stroke="currentColor" strokeWidth="2" opacity="0.15"/>
                    <path d={`M${8 + i*6} 45L${8 + i*6} 43`} stroke="currentColor" strokeWidth="3" opacity="0.12"/>
                    <path d={`M${8 + i*6} 25L${8 + i*6} 23`} stroke="currentColor" strokeWidth="3" opacity="0.12"/>
                    
                    {/* Bamboo leaves */}
                    <ellipse cx={8 + i*6 - 3} cy={15} rx="2" ry="8" fill="currentColor" opacity="0.1"/>
                    <ellipse cx={8 + i*6 + 3} cy={18} rx="2" ry="6" fill="currentColor" opacity="0.1"/>
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Cherry blossom tree (representing healing traditions) */}
            <div className={`absolute top-32 center ${styles.flowerBloom} ${styles.delay8}`} style={{ left: '40%' }}>
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <path d="M50 70L50 80" stroke="currentColor" strokeWidth="3.5" opacity="0.16"/>
                <path d="M30 40C25 30 30 20 40 18C50 16 60 22 65 32C70 42 65 52 50 60C35 52 25 42 30 40Z" 
                      fill="currentColor" opacity="0.07"/>
                
                {/* Cherry blossoms */}
                <g className={styles.flowerBloom}>
                  <circle cx="35" cy="30" r="3" fill="currentColor" opacity="0.2"/>
                  <circle cx="32" cy="28" r="1.5" fill="currentColor" opacity="0.15"/>
                  <circle cx="38" cy="28" r="1.5" fill="currentColor" opacity="0.15"/>
                  <circle cx="35" cy="32" r="1.5" fill="currentColor" opacity="0.15"/>
                  <circle cx="35" cy="26" r="1.5" fill="currentColor" opacity="0.15"/>
                </g>
                
                <g className={styles.flowerBloom}>
                  <circle cx="55" cy="35" r="3" fill="currentColor" opacity="0.18"/>
                  <circle cx="52" cy="33" r="1.5" fill="currentColor" opacity="0.13"/>
                  <circle cx="58" cy="33" r="1.5" fill="currentColor" opacity="0.13"/>
                  <circle cx="55" cy="37" r="1.5" fill="currentColor" opacity="0.13"/>
                  <circle cx="55" cy="31" r="1.5" fill="currentColor" opacity="0.13"/>
                </g>
                
                <g className={styles.flowerBloom}>
                  <circle cx="45" cy="25" r="2.5" fill="currentColor" opacity="0.22"/>
                  <circle cx="43" cy="23" r="1.2" fill="currentColor" opacity="0.16"/>
                  <circle cx="47" cy="23" r="1.2" fill="currentColor" opacity="0.16"/>
                  <circle cx="45" cy="27" r="1.2" fill="currentColor" opacity="0.16"/>
                </g>
              </svg>
            </div>
            
            {/* Pine tree (representing longevity and wisdom) */}
            <div className={`absolute bottom-10 right-20 ${styles.branchWave} ${styles.delay7}`}>
              <svg width="70" height="90" viewBox="0 0 70 90" fill="none" className="text-[rgb(var(--color-tertiary))]">
                <path d="M35 80L35 90" stroke="currentColor" strokeWidth="3" opacity="0.14"/>
                {/* Pine needle clusters */}
                <path d="M35 70C30 65 25 60 20 55C25 60 30 65 35 70C40 65 45 60 50 55C45 60 40 65 35 70Z" 
                      fill="currentColor" opacity="0.08"/>
                <path d="M35 50C28 45 22 40 15 35C22 40 28 45 35 50C42 45 48 40 55 35C48 40 42 45 35 50Z" 
                      fill="currentColor" opacity="0.09"/>
                <path d="M35 30C26 25 18 20 10 15C18 20 26 25 35 30C44 25 52 20 60 15C52 20 44 25 35 30Z" 
                      fill="currentColor" opacity="0.1"/>
                      
                {/* Pine cones */}
                <ellipse cx="25" cy="45" rx="2" ry="4" fill="currentColor" opacity="0.15"/>
                <ellipse cx="45" cy="50" rx="2" ry="4" fill="currentColor" opacity="0.15"/>
              </svg>
            </div>
            
            {/* International garden border elements */}
            <div className={`absolute bottom-0 left-0 w-full h-16 ${styles.vineGrow} ${styles.delay3}`}>
              <svg width="100%" height="64" viewBox="0 0 1200 64" fill="none" className="text-[rgb(var(--color-tertiary))]">
                {/* Garden bed representing global diversity */}
                <path d="M0 30C150 25 300 35 450 30C600 25 750 35 900 30C1050 25 1200 35 1200 30L1200 64L0 64Z" 
                      fill="currentColor" opacity="0.05"/>
                      
                {/* Small international plants */}
                <circle cx="100" cy="40" r="3" fill="currentColor" opacity="0.1"/>
                <circle cx="300" cy="38" r="4" fill="currentColor" opacity="0.08"/>
                <circle cx="500" cy="42" r="2.5" fill="currentColor" opacity="0.12"/>
                <circle cx="700" cy="39" r="3.5" fill="currentColor" opacity="0.09"/>
                <circle cx="900" cy="41" r="3" fill="currentColor" opacity="0.11"/>
                <circle cx="1100" cy="40" r="2.8" fill="currentColor" opacity="0.1"/>
              </svg>
            </div>
          </div>
          
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-sm mb-8 shadow-lg">
              <BookOpen className="w-4 h-4" />
              {dictionary.pages.leShiatsu.schoolsTraditions}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">{t.schools.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed">
              {dictionary.pages.leShiatsu.schoolsDescription}
            </p>
            {/* Garden Border Section Separator */}
            <div className="flex justify-center items-center mt-12 py-8">
              <div className={`${styles.vineGrow} ${styles.delay5}`}>
                <svg width="300" height="50" viewBox="0 0 300 50" fill="none" className="text-[rgb(var(--color-tertiary))]">
                  {/* Flower bed border design */}
                  <path d="M20 25C60 20 90 30 130 25C170 20 200 30 240 25C260 23 280 25 280 25" 
                        stroke="currentColor" strokeWidth="2.5" opacity="0.5" fill="none"/>
                  
                  {/* Multiple small flowers in a garden bed style */}
                  <g className={styles.flowerBloom}>
                    <circle cx="70" cy="22" r="3" fill="currentColor" opacity="0.7"/>
                    <circle cx="68" cy="20" r="1.5" fill="currentColor" opacity="0.4"/>
                    <circle cx="72" cy="20" r="1.5" fill="currentColor" opacity="0.4"/>
                    <circle cx="70" cy="24" r="1.5" fill="currentColor" opacity="0.4"/>
                    <circle cx="70" cy="18" r="1.5" fill="currentColor" opacity="0.4"/>
                  </g>
                  
                  <g className={styles.flowerBloom}>
                    <circle cx="150" cy="28" r="2.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="148" cy="26" r="1.2" fill="currentColor" opacity="0.3"/>
                    <circle cx="152" cy="26" r="1.2" fill="currentColor" opacity="0.3"/>
                    <circle cx="150" cy="30" r="1.2" fill="currentColor" opacity="0.3"/>
                  </g>
                  
                  <g className={styles.flowerBloom}>
                    <circle cx="220" cy="23" r="3.5" fill="currentColor" opacity="0.8"/>
                    <circle cx="217" cy="21" r="1.8" fill="currentColor" opacity="0.5"/>
                    <circle cx="223" cy="21" r="1.8" fill="currentColor" opacity="0.5"/>
                    <circle cx="220" cy="26" r="1.8" fill="currentColor" opacity="0.5"/>
                    <circle cx="220" cy="19" r="1.8" fill="currentColor" opacity="0.5"/>
                  </g>
                  
                  {/* Small garden leaves scattered around */}
                  <ellipse cx="100" cy="30" rx="4" ry="6" fill="currentColor" opacity="0.5"/>
                  <ellipse cx="180" cy="32" rx="3" ry="5" fill="currentColor" opacity="0.5"/>
                  <ellipse cx="250" cy="28" rx="3.5" ry="5.5" fill="currentColor" opacity="0.5"/>
                  
                  {/* Moss and ground cover */}
                  <circle cx="50" cy="28" r="2" fill="currentColor" opacity="0.3"/>
                  <circle cx="120" cy="30" r="1.5" fill="currentColor" opacity="0.3"/>
                  <circle cx="200" cy="32" r="2.5" fill="currentColor" opacity="0.3"/>
                  <circle cx="270" cy="27" r="1.8" fill="currentColor" opacity="0.3"/>
                  
                  {/* Garden soil line */}
                  <path d="M10 35C50 33 100 37 150 35C200 33 250 37 290 35" 
                        stroke="currentColor" strokeWidth="1" opacity="0.2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Enhanced card grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/20 to-transparent rounded-3xl"></div>
            <div className="relative z-10 p-8 lg:p-12">
              <ExpandableCardGrid cards={t.schools.items} />
            </div>
          </div>
        </section>

      </main>

      {/* Enhanced Final Call to Action */}
      <div className="relative mt-24 bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/3 via-transparent to-[rgb(var(--color-primary))]/3"></div>
        <div className="relative z-10">
          <CtaSection dictionary={dictionary} lang={lang} />
        </div>
      </div>
    </div>
  );
}