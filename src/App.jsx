import React from 'react';
import './App.css';

const PACKAGES = [
  { id: 'batterymirror', name: 'BatteryMirror', desc: 'Mirrors the statusbar battery on the Low Power Mode toggle in Control Center.', version: 'v0.0.4', icon: 'com.futur3sn0w.batterymirror.png' },
  { id: 'battfx', name: 'BattFX', desc: 'Styles the system battery indicator while keeping the modern percentage body available systemwide.', version: 'v0.0.5', icon: 'com.futur3sn0w.battfx.png' },
  { id: 'ccaster', name: 'CCAster', desc: 'An iOS 18-inspired, editable Control Center experience for iOS 16.', version: 'v0.2.2', icon: 'com.futur3sn0w.ccaster.png' },
  { id: 'ccsupportbatteryfix', name: 'CCSupport Battery Fix', desc: 'Fixes status bar battery percentage display when CCSupport is installed on iOS 15+.', version: 'v0.0.2', icon: 'com.futur3sn0w.ccsupportbatteryfix.png' },
  { id: 'centerlastrow', name: 'CenterLastRow', desc: 'Centers the final SpringBoard icon row when it is not full.', version: 'v0.0.1-2+debug', icon: 'com.futur3sn0w.centerlastrow.png' },
  { id: 'custhome', name: 'CustHome', desc: 'Backport the modern Home Screen customize experience to iOS 15, 16, and 17.', version: 'v0.2.0', icon: 'com.futur3sn0w.custhome.png' },
  { id: 'dockfull', name: 'DockFull', desc: 'Adds switchable full-width dock styles, including a square extended dock, a rounded card dock, and a stock floating mode.', version: 'v0.0.3', icon: 'com.futur3sn0w.dockfull.png' },
  { id: 'docklibrary', name: 'DockLibrary', desc: 'Swipe up from the dock to open the App Library.', version: 'v0.4.2', icon: 'com.futur3sn0w.docklibrary.png' },
  { id: 'duowall', name: 'DuoWall', desc: 'Create native light and dark WallpaperKit pairs that appear in Collections and switch automatically with system appearance.', version: 'v0.0.76-2+debug', icon: 'com.futur3sn0w.duowall.png' },
  { id: 'finn', name: 'Finn', desc: 'Tints the homescreen context-menu backdrop to the app icon color. Rootless rewrite of Koi for iOS 15 & 16.', version: 'v1.0.1', icon: 'com.futur3sn0w.finn.png' },
  { id: 'muteflash', name: 'MuteFlash', desc: 'Use the ringer switch as a flashlight toggle without changing silent mode.', version: 'v0.0.2', icon: 'com.futur3sn0w.muteflash.png' },
  { id: 'mutemodule', name: 'MuteModule', desc: 'Exposes Apple\'s hidden Control Center mute module on iPhone.', version: 'v0.0.1-4+debug', icon: 'com.futur3sn0w.mutemodule.png' },
  { id: 'noseparators', name: 'NoSeparators', desc: 'Hide common UIKit separator lines systemwide on iOS 11.', version: 'v0.0.1-2+debug', icon: 'com.futur3sn0w.noseparators.png' },
  { id: 'solert', name: 'Solert', desc: 'iOS 26-inspired UIAlertController restyling for iOS 15.', version: 'v0.0.1-1+debug', icon: 'com.futur3sn0w.solert.png' },
  { id: 'swipeformore7', name: 'SwipeForMore7', desc: 'Manage packages in Cydia via swipe.', version: 'v1.2.5+ios7.12', icon: 'com.futur3sn0w.swipeformore7.png' },
  { id: 'taptimenneo', name: 'TapTimeNeo', desc: 'Tap the status bar clock to briefly show the date on iOS 15+.', version: 'v0.0.1-7+debug', icon: 'com.futur3sn0w.taptimenneo.png' },
];

export default function App() {
  return (
    <>
      <div className="hero">
        <img 
          className="hero-logo" 
          src="https://futur3sn0w.github.io/repo/CydiaIcon.png" 
          alt="F1X3R" 
        />
        <h1>F1X3R Developer</h1>
        <p>DarkStore &nbsp;&middot;&nbsp; {PACKAGES.length} packages</p>
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h2>Packages</h2>
        <span className="badge">{PACKAGES.length}</span>
      </div>

      <div className="pkg-grid">
        {PACKAGES.map((pkg) => (
          <div className="pkg-card" key={pkg.id}>
            <img 
              className="pkg-icon" 
              src={`https://futur3sn0w.github.io/repo/icons/${pkg.icon}`} 
              alt={`${pkg.name} icon`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="pkg-info">
              <div className="pkg-name">{pkg.name}</div>
              <div className="pkg-desc">{pkg.desc}</div>
              <div className="pkg-version">{pkg.version}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      <footer>
        <p>Made with ♡ by <a href="tg://user?id=6105731078">F1X3R</a></p>
      </footer>
    </>
  );
}
