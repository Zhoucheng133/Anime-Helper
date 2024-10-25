import { dlFormStore, dlStatusStore, exclusionTableColumn } from "@/hooks/downloader"
import { Accordion, AccordionItem, Button, Chip, Input, Select, SelectItem, Switch, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { bangumiTableColumn } from "@/hooks/downloader";

export default function DownloaderContent(){

  const [status, setStatus]=useRecoilState(dlStatusStore);
  const [form, setForm]=useRecoilState(dlFormStore);

  return <div className="page">
    <div className="item">
      <div className="label">运行状态</div>
      <div className="content">
        <Chip variant="flat" size="sm" color={ status ? 'success' : 'warning' }>{ status ? '运行中' : '等待中' }</Chip>
        <Switch aria-label="switcher" size="sm" style={{marginLeft: 20}}/>
      </div>
    </div>
    <div className="item">
      <div className="label">系统操作</div>
      <div className="content">
        <Button size="sm" variant="flat">显示日志</Button>
        <Button size="sm" variant="flat" style={{marginLeft: 20}}>保存表单</Button>
      </div>
    </div>
    <div className="item">
      <div className="label">RSS来源</div>
      <div className="content">
        <Select aria-label='筛选' size="sm" label={null} defaultSelectedKeys={[form.type]} className="selector">
          <SelectItem key={'mikan'}>Mikan</SelectItem>
          <SelectItem key={'acgrip'}>Acgrip</SelectItem>
        </Select>
      </div>
    </div>
    <div className="item">
      <div className="label">更新频率</div>
      <div className="content">
        <Input size="sm" type="number" className="freq_input" value={form.freq.toString()}></Input>
      </div>
    </div>
    <div className="item">
      <div className="label">Aria2 地址</div>
      <div className="content">
        <Input size="sm" placeholder="http(s)://" value={form.ariaLink}></Input>
      </div>
    </div>
    <div className="item">
      <div className="label">Aria2 密钥</div>
      <div className="content">
      <Input size="sm" type="password" value={form.ariaSecret}></Input>
      </div>
    </div>
    <Accordion selectionMode="multiple" defaultExpandedKeys={['1', '2']}>
      <AccordionItem key="1" aria-label="list" title="番剧表">
        <Button size="sm" color="primary" style={{marginBottom: 10}}>添加</Button>
        <Table aria-label='bangumi list'>
          <TableHeader columns={bangumiTableColumn}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={form.bangumi}>
            {
              form.bangumi.map((item, index)=>(
                <TableRow key={index}>
                  {(columnKey)=>{
                    if(columnKey=='ass'){
                      return <TableCell>{item.ass}</TableCell>
                    }else if(columnKey=='title'){
                      return <TableCell>{item.title}</TableCell>
                    }
                    return <TableCell style={{userSelect: 'none', width: 90}}>
                      <Button size="sm" variant="flat" color="danger">删除</Button>
                    </TableCell>
                  }}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </AccordionItem>
      <AccordionItem key="2" aria-label="exclude" title="排除关键字">
        <Button size="sm" color="primary" style={{marginBottom: 10}}>添加</Button>
        <Table aria-label='exclusion list'>
          <TableHeader columns={exclusionTableColumn}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={form.exclusions}>
            {
              form.exclusions.map((item, index)=>(
                <TableRow key={index}>
                  {(columnKey)=>{
                    if(columnKey=='value'){
                      return <TableCell>{item}</TableCell>
                    }
                    return <TableCell style={{userSelect: 'none', width: 90}}>
                      <Button size="sm" variant="flat" color="danger">删除</Button>
                    </TableCell>
                  }}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>
  </div>
}