import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  LayoutDashboard, 
  FolderKanban, 
  MessageSquare, 
  FileText, 
  Settings, 
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Upload,
  Activity
} from 'lucide-react';

export function ClientPortal() {
  const [selectedProject] = useState('Enterprise AI Platform');

  const projects = [
    {
      name: 'Enterprise AI Platform',
      status: 'In Progress',
      progress: 75,
      dueDate: 'March 15, 2026',
    },
    {
      name: 'Cloud Migration Phase 2',
      status: 'Planning',
      progress: 15,
      dueDate: 'April 30, 2026',
    },
  ];

  const recentTickets = [
    {
      id: 'TICKET-1234',
      title: 'API Performance Optimization',
      status: 'In Progress',
      priority: 'High',
      assignee: 'Engineering Team',
    },
    {
      id: 'TICKET-1233',
      title: 'User Authentication Issue',
      status: 'Resolved',
      priority: 'Critical',
      assignee: 'Security Team',
    },
    {
      id: 'TICKET-1232',
      title: 'Dashboard UI Enhancement',
      status: 'Review',
      priority: 'Medium',
      assignee: 'Frontend Team',
    },
  ];

  const documents = [
    { name: 'System Architecture v3.2.pdf', date: 'Feb 18, 2026', size: '2.4 MB' },
    { name: 'API Documentation.pdf', date: 'Feb 15, 2026', size: '1.8 MB' },
    { name: 'Security Audit Report.pdf', date: 'Feb 10, 2026', size: '3.1 MB' },
    { name: 'Deployment Guide.pdf', date: 'Feb 5, 2026', size: '1.2 MB' },
  ];

  const deploymentLogs = [
    { environment: 'Production', version: 'v2.3.1', status: 'Success', time: '2 hours ago' },
    { environment: 'Staging', version: 'v2.3.2', status: 'Success', time: '5 hours ago' },
    { environment: 'Production', version: 'v2.3.0', status: 'Success', time: '1 day ago' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved':
      case 'Success':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'Review':
        return <Activity className="h-4 w-4 text-orange-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'destructive';
      case 'High':
        return 'default';
      case 'Medium':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-accent">
      {/* Portal Header */}
      <div className="bg-white border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Client Portal</h1>
              <p className="text-sm text-muted-foreground">Welcome back! Here's your project overview.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="bg-white p-1">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <FolderKanban className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger value="tickets" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Tickets</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </TabsTrigger>
            <TabsTrigger value="deployments" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Deployments</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  <FolderKanban className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">1 in progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">1 high priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Deployments</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">99.9%</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Current Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{project.name}</h3>
                        <Badge variant={project.status === 'In Progress' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Progress: {project.progress}%</span>
                        <span>Due: {project.dueDate}</span>
                      </div>
                      <div className="w-full bg-accent rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Tickets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentTickets.map((ticket, index) => (
                    <div key={index} className="flex items-start justify-between pb-4 border-b last:border-0">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(ticket.status)}
                          <span className="font-medium text-sm">{ticket.title}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{ticket.id}</span>
                          <span>•</span>
                          <span>{ticket.assignee}</span>
                        </div>
                      </div>
                      <Badge variant={getPriorityColor(ticket.priority) as any}>
                        {ticket.priority}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>All Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="p-6 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                          <p className="text-sm text-muted-foreground">Due: {project.dueDate}</p>
                        </div>
                        <Badge variant={project.status === 'In Progress' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Overall Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-accent rounded-full h-3">
                          <div
                            className="bg-primary rounded-full h-3 transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tickets Tab */}
          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTickets.map((ticket, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(ticket.status)}
                        <div>
                          <h4 className="font-medium">{ticket.title}</h4>
                          <p className="text-sm text-muted-foreground">{ticket.id} • {ticket.assignee}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={getPriorityColor(ticket.priority) as any}>
                          {ticket.priority}
                        </Badge>
                        <Badge variant="outline">{ticket.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Project Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-medium">{doc.name}</h4>
                          <p className="text-sm text-muted-foreground">{doc.date} • {doc.size}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Deployments Tab */}
          <TabsContent value="deployments">
            <Card>
              <CardHeader>
                <CardTitle>Deployment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deploymentLogs.map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(log.status)}
                        <div>
                          <h4 className="font-medium">{log.environment} - {log.version}</h4>
                          <p className="text-sm text-muted-foreground">{log.time}</p>
                        </div>
                      </div>
                      <Badge variant={log.status === 'Success' ? 'default' : 'destructive'}>
                        {log.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Portal Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Team Access</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manage who has access to your project portal
                    </p>
                    <Button variant="outline">Manage Team Members</Button>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-medium mb-4">Notifications</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure email and Slack notifications
                    </p>
                    <Button variant="outline">Configure Notifications</Button>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-medium mb-4">API Access</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Generate API keys for programmatic access
                    </p>
                    <Button variant="outline">Manage API Keys</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
