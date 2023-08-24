package app

type IPublication interface {
	SetName(name string)
	SetPages(pages int)
	SetPublisher(publisher string)
	GetName() string
	GetPages() int
	GetPublisher() string
}

type publication struct {
	name      string
	pages     int
	publisher string
}

func (p *publication) SetName(name string) {
	p.name = name
}

func (p *publication) SetPages(pages int) {
	p.pages = pages
}

func (p *publication) SetPublisher(publisher string) {
	p.publisher = publisher
}

func (p *publication) GetName() string {
	return p.name
}

func (p *publication) GetPages() int {
	return p.pages
}

func (p *publication) GetPublisher() string {
	return p.publisher
}
