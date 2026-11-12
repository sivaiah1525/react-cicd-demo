
import { useState } from 'react'
import './App.css'

const initialProjects = [
  { name: 'Website Redesign', team: 'Design Team', progress: 85, status: 'On Track', color: 'purple' },
  { name: 'Mobile Application', team: 'Development', progress: 65, status: 'In Progress', color: 'blue' },
  { name: 'CRM Integration', team: 'Engineering', progress: 45, status: 'In Progress', color: 'orange' },
  { name: 'Marketing Campaign', team: 'Marketing', progress: 95, status: 'Completed', color: 'green' },
]

const activities = [
  { icon: '👤', title: 'New employee joined', detail: 'Sarah Johnson joined Design Team', time: '10 minutes ago' },
  { icon: '📁', title: 'Project updated', detail: 'Website Redesign progress updated', time: '35 minutes ago' },
  { icon: '💰', title: 'Payment received', detail: 'Invoice #INV-2048 was paid', time: '1 hour ago' },
  { icon: '📅', title: 'Meeting scheduled', detail: 'Team meeting at 3:00 PM', time: '2 hours ago' },
]

const navigation = [
  { name: 'Dashboard', icon: '▦' },
  { name: 'Employees', icon: '♙' },
  { name: 'Projects', icon: '▤' },
  { name: 'Departments', icon: '◫' },
  { name: 'Reports', icon: '▥' },
  { name: 'Settings', icon: '⚙' },
]

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projects, setProjects] = useState(initialProjects)

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase())
  )

  function addProject(e) {
    e.preventDefault()
    if (!projectName.trim()) return

    setProjects([
      ...projects,
      {
        name: projectName,
        team: 'New Team',
        progress: 0,
        status: 'In Progress',
        color: 'blue',
      },
    ])
    setProjectName('')
    setShowModal(false)
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">N</div>
          <span>Nexora<span className="brand-dot">.</span></span>
        </div>

        <div className="workspace">
          <div className="workspace-avatar">NC</div>
          <div>
            <strong>Nexora Company</strong>
            <small>Enterprise Workspace</small>
          </div>
          <span className="workspace-arrow">⌄</span>
        </div>

        <p className="menu-label">WORKSPACE</p>

        <nav className="navigation">
          {navigation.map(item => (
            <button
              key={item.name}
              className={`nav-item ${activePage === item.name ? 'active' : ''}`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
              {item.name === 'Projects' && (
                <span className="nav-count">{projects.length}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">✦</div>
            <strong>Upgrade your plan</strong>
            <p>Unlock more powerful business insights.</p>
            <button onClick={() => setActivePage('Reports')}>Explore plans →</button>
          </div>

          <div className="profile">
            <div className="profile-avatar">SJ</div>
            <div>
              <strong>thirupathi</strong>
              <small>Administrator</small>
            </div>
            <span className="profile-menu">•••</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <span>/</span>
            <strong>{activePage}</strong>
          </div>

          <div className="topbar-actions">
            <div className="search-box">
              <span>⌕</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search projects..."
              />
              <kbd>⌘ K</kbd>
            </div>
            <button className="notification-btn" aria-label="Notifications">
              ♧
              <i />
            </button>
            <div className="top-avatar">SJ</div>
          </div>
        </header>

        <div className="dashboard-container">
          <section className="welcome-section">
            <div>
              <div className="date-label">THURSDAY, NOVEMBER 12, 2026</div>
              <h1>{activePage === 'Dashboard' ? 'Good afternoon, thirupathi 👋' : activePage}</h1>
              <p>Here's what's happening with your company today.</p>
            </div>
            <button className="primary-btn" onClick={() => setShowModal(true)}>
              <span>＋</span> Add Project
            </button>
          </section>

          {activePage !== 'Dashboard' && (
            <div className="page-notice">
              <strong>{activePage} workspace</strong>
              <p>This section is ready for your next management module. Your dashboard overview remains available from the sidebar.</p>
              <button onClick={() => setActivePage('Dashboard')}>Back to Dashboard</button>
            </div>
          )}

          <section className="stats-grid">
            <StatCard
              label="Total Employees"
              value="248"
              change="+12.5%"
              note="vs last month"
              icon="♙"
              color="purple"
              width="72%"
            />
            <StatCard
              label="Active Projects"
              value={projects.length.toString().padStart(2, '0')}
              change="+8.2%"
              note="vs last month"
              icon="▤"
              color="blue"
              width="58%"
            />
            <StatCard
              label="Total Revenue"
              value="$84,250"
              change="+18.4%"
              note="vs last month"
              icon="$"
              color="green"
              width="82%"
            />
            <StatCard
              label="Productivity"
              value="89.6%"
              change="+4.3%"
              note="vs last month"
              icon="↗"
              color="orange"
              width="89%"
            />
          </section>

          <section className="middle-grid">
            <div className="panel revenue-panel">
              <div className="panel-header">
                <div>
                  <h2>Revenue Overview</h2>
                  <p>Monthly company revenue</p>
                </div>
                <select aria-label="Revenue period" defaultValue="This year">
                  <option>This year</option>
                  <option>Last year</option>
                </select>
              </div>

              <div className="revenue-total">
                <strong>$84,250</strong>
                <span>↗ 18.4%</span>
              </div>

              <div className="chart">
                <div className="chart-labels">
                  <span>$100k</span>
                  <span>$75k</span>
                  <span>$50k</span>
                  <span>$25k</span>
                  <span>$0</span>
                </div>
                <svg viewBox="0 0 700 220" preserveAspectRatio="none" className="revenue-svg">
                  <defs>
                    <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7665ed" stopOpacity=".28" />
                      <stop offset="100%" stopColor="#7665ed" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[25, 70, 115, 160, 205].map(y => (
                    <line key={y} x1="0" y1={y} x2="700" y2={y} className="grid-line" />
                  ))}
                  <path
                    className="chart-area"
                    d="M0 170 C45 150 60 165 100 135 S160 145 200 112 S260 125 300 92 S360 112 400 75 S460 105 500 65 S560 90 600 45 S660 65 700 20 L700 210 L0 210 Z"
                  />
                  <path
                    className="chart-line"
                    d="M0 170 C45 150 60 165 100 135 S160 145 200 112 S260 125 300 92 S360 112 400 75 S460 105 500 65 S560 90 600 45 S660 65 700 20"
                  />
                  <circle cx="600" cy="45" r="5" className="chart-point" />
                </svg>
              </div>
              <div className="chart-months">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>

            <div className="panel performance-panel">
              <div className="panel-header">
                <div>
                  <h2>Department Performance</h2>
                  <p>Team productivity score</p>
                </div>
                <button className="more-btn">•••</button>
              </div>

              <div className="performance-content">
                <div className="donut-chart">
                  <div className="donut-inner">
                    <strong>89%</strong>
                    <span>Average</span>
                  </div>
                </div>
              </div>

              <div className="legend">
                <Legend color="purple" name="Development" value="94%" />
                <Legend color="blue" name="Marketing" value="86%" />
                <Legend color="orange" name="Design" value="78%" />
                <Legend color="green" name="HR & Operations" value="91%" />
              </div>
            </div>
          </section>

          <section className="bottom-grid">
            <div className="panel projects-panel">
              <div className="panel-header">
                <div>
                  <h2>Active Projects</h2>
                  <p>Track your team's project progress</p>
                </div>
                <button className="text-btn" onClick={() => setActivePage('Projects')}>
                  View all →
                </button>
              </div>

              <div className="project-table">
                <div className="table-heading">
                  <span>PROJECT NAME</span>
                  <span>TEAM</span>
                  <span>PROGRESS</span>
                  <span>STATUS</span>
                </div>
                {filteredProjects.map(project => (
                  <div className="project-row" key={project.name}>
                    <div className="project-name">
                      <div className={`project-symbol ${project.color}`}>◈</div>
                      <strong>{project.name}</strong>
                    </div>
                    <span className="team-name">{project.team}</span>
                    <div className="progress-cell">
                      <div className="progress-track">
                        <div
                          className={`progress-fill ${project.color}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span>{project.progress}%</span>
                    </div>
                    <span className={`status ${project.status === 'Completed' ? 'completed' : 'ongoing'}`}>
                      {project.status}
                    </span>
                  </div>
                ))}
                {filteredProjects.length === 0 && (
                  <p className="empty-state">No matching projects found.</p>
                )}
              </div>
            </div>

            <div className="panel activity-panel">
              <div className="panel-header">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest company updates</p>
                </div>
                <button className="more-btn">•••</button>
              </div>

              <div className="activity-list">
                {activities.map((activity, index) => (
                  <div className="activity-item" key={index}>
                    <div className="activity-icon">{activity.icon}</div>
                    <div className="activity-text">
                      <strong>{activity.title}</strong>
                      <p>{activity.detail}</p>
                      <small>{activity.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="footer">
            <span>© 2026 Nexora Company. All rights reserved.</span>
            <span>Made for better business management ✦</span>
          </footer>
        </div>
      </main>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <form className="project-modal" onSubmit={addProject} onClick={e => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <span className="modal-icon">＋</span>
            <h2>Create a new project</h2>
            <p>Add a project to your company workspace.</p>
            <label htmlFor="projectName">Project name</label>
            <input
              id="projectName"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              placeholder="Enter project name"
              autoFocus
            />
            <button className="primary-btn modal-submit" type="submit">Create Project</button>
          </form>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value, change, note, icon, color, width }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div>
          <p>{label}</p>
          <h2>{value}</h2>
        </div>
        <div className={`stat-icon ${color}`}>{icon}</div>
      </div>
      <div className="stat-bottom">
        <span className="stat-change">{change}</span>
        <span>{note}</span>
      </div>
      <div className="mini-progress">
        <div style={{ width }} />
      </div>
    </div>
  )
}

function Legend({ color, name, value }) {
  return (
    <div className="legend-item">
      <span className={`legend-dot ${color}`} />
      <span>{name}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default App
